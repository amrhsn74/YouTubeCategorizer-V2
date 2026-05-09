using System.Diagnostics;
using Microsoft.Extensions.Hosting;

namespace YouTubeCategorizer.API.Services;

public sealed class MlApiAutoStartHostedService : IHostedService, IDisposable
{
    private readonly IConfiguration _configuration;
    private readonly IHostEnvironment _hostEnvironment;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly ILogger<MlApiAutoStartHostedService> _logger;

    private Process? _mlApiProcess;
    private bool _startedByService;

    public MlApiAutoStartHostedService(
        IConfiguration configuration,
        IHostEnvironment hostEnvironment,
        IHttpClientFactory httpClientFactory,
        ILogger<MlApiAutoStartHostedService> logger)
    {
        _configuration = configuration;
        _hostEnvironment = hostEnvironment;
        _httpClientFactory = httpClientFactory;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        var autoStart = _configuration.GetValue("MLApi:AutoStart", false);
        if (!autoStart)
        {
            _logger.LogInformation("[ML API AutoStart] Disabled by configuration (MLApi:AutoStart=false).");
            return;
        }

        var mlApiBaseUrl = _configuration["MLApi:Url"] ?? "http://localhost:5001";
        if (await IsMlApiHealthyAsync(mlApiBaseUrl, cancellationToken))
        {
            _logger.LogInformation("[ML API AutoStart] ML API is already running at {Url}.", mlApiBaseUrl);
            return;
        }

        var workingDirectory = ResolvePath(
            _hostEnvironment.ContentRootPath,
            _configuration["MLApi:WorkingDirectory"] ?? @"..\ML_Model\api");

        var pythonExecutable = ResolvePath(
            _hostEnvironment.ContentRootPath,
            _configuration["MLApi:PythonExecutable"] ?? @"..\ML_Model\venv\Scripts\python.exe");

        if (!Directory.Exists(workingDirectory))
        {
            _logger.LogError(
                "[ML API AutoStart] Working directory not found: {WorkingDirectory}.",
                workingDirectory);
            return;
        }

        if (!File.Exists(pythonExecutable))
        {
            _logger.LogError(
                "[ML API AutoStart] Python executable not found: {PythonExecutable}.",
                pythonExecutable);
            return;
        }

        var appFile = _configuration["MLApi:AppFile"] ?? "app.py";
        var appFilePath = Path.Combine(workingDirectory, appFile);
        if (!File.Exists(appFilePath))
        {
            _logger.LogError(
                "[ML API AutoStart] ML API file not found: {AppFilePath}.",
                appFilePath);
            return;
        }

        var startInfo = new ProcessStartInfo
        {
            FileName = pythonExecutable,
            Arguments = appFile,
            WorkingDirectory = workingDirectory,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        var process = new Process
        {
            StartInfo = startInfo,
            EnableRaisingEvents = true
        };

        process.OutputDataReceived += (_, e) =>
        {
            if (!string.IsNullOrWhiteSpace(e.Data))
            {
                _logger.LogInformation("[ML API] {Line}", e.Data);
            }
        };

        process.ErrorDataReceived += (_, e) =>
        {
            if (!string.IsNullOrWhiteSpace(e.Data))
            {
                _logger.LogWarning("[ML API] {Line}", e.Data);
            }
        };

        process.Exited += (_, _) =>
        {
            _logger.LogWarning(
                "[ML API AutoStart] ML API process exited with code {ExitCode}.",
                process.ExitCode);
        };

        _logger.LogInformation(
            "[ML API AutoStart] Starting ML API using {PythonExecutable} {AppFile} in {WorkingDirectory}.",
            pythonExecutable,
            appFile,
            workingDirectory);

        if (!process.Start())
        {
            _logger.LogError("[ML API AutoStart] Failed to start ML API process.");
            process.Dispose();
            return;
        }

        process.BeginOutputReadLine();
        process.BeginErrorReadLine();

        _mlApiProcess = process;
        _startedByService = true;

        var startupTimeoutSeconds = _configuration.GetValue("MLApi:StartupTimeoutSeconds", 40);
        var healthy = await WaitForHealthyAsync(mlApiBaseUrl, startupTimeoutSeconds, cancellationToken);

        if (healthy)
        {
            _logger.LogInformation(
                "[ML API AutoStart] ML API is healthy at {HealthUrl} (PID {Pid}).",
                $"{mlApiBaseUrl.TrimEnd('/')}/health",
                process.Id);
            return;
        }

        _logger.LogError(
            "[ML API AutoStart] ML API did not become healthy within {TimeoutSeconds}s.",
            startupTimeoutSeconds);
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        if (!_startedByService || _mlApiProcess is null || _mlApiProcess.HasExited)
        {
            return Task.CompletedTask;
        }

        try
        {
            _logger.LogInformation(
                "[ML API AutoStart] Stopping auto-started ML API process (PID {Pid}).",
                _mlApiProcess.Id);
            _mlApiProcess.Kill(entireProcessTree: true);
            _mlApiProcess.WaitForExit(5000);
        }
        catch (Exception ex)
        {
            _logger.LogWarning(ex, "[ML API AutoStart] Failed to stop ML API process cleanly.");
        }

        return Task.CompletedTask;
    }

    public void Dispose()
    {
        _mlApiProcess?.Dispose();
    }

    private async Task<bool> WaitForHealthyAsync(string baseUrl, int timeoutSeconds, CancellationToken cancellationToken)
    {
        var deadline = DateTime.UtcNow.AddSeconds(timeoutSeconds);

        while (DateTime.UtcNow < deadline)
        {
            cancellationToken.ThrowIfCancellationRequested();

            if (_mlApiProcess is { HasExited: true })
            {
                return false;
            }

            if (await IsMlApiHealthyAsync(baseUrl, cancellationToken))
            {
                return true;
            }

            await Task.Delay(TimeSpan.FromSeconds(1), cancellationToken);
        }

        return false;
    }

    private async Task<bool> IsMlApiHealthyAsync(string baseUrl, CancellationToken cancellationToken)
    {
        var client = _httpClientFactory.CreateClient();
        var healthUrl = $"{baseUrl.TrimEnd('/')}/health";

        using var timeoutCts = CancellationTokenSource.CreateLinkedTokenSource(cancellationToken);
        timeoutCts.CancelAfter(TimeSpan.FromSeconds(2));

        try
        {
            using var response = await client.GetAsync(healthUrl, timeoutCts.Token);
            return response.IsSuccessStatusCode;
        }
        catch
        {
            return false;
        }
    }

    private static string ResolvePath(string contentRootPath, string configuredPath)
    {
        if (Path.IsPathRooted(configuredPath))
        {
            return configuredPath;
        }

        return Path.GetFullPath(Path.Combine(contentRootPath, configuredPath));
    }
}
