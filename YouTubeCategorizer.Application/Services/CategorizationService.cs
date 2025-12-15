using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using YouTubeCategorizer.Core.Interfaces;

namespace YouTubeCategorizer.Application.Services
{
    public interface ICategorizationService
    {
        Task<string> CategorizeContentAsync(string text);
    }

    public class CategorizationService : ICategorizationService
    {
        private readonly HttpClient _httpClient;
        private readonly string _pythonApiUrl;

        public CategorizationService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;

            // Read Python ML API URL from configuration
            _pythonApiUrl = configuration["PythonML:ApiUrl"] ?? "http://localhost:5001";

            Console.WriteLine($"[ML Service] Using Python ML API at: {_pythonApiUrl}");
        }

        public async Task<string> CategorizeContentAsync(string text)
        {
            // Return "Uncategorized" for empty text
            if (string.IsNullOrWhiteSpace(text))
            {
                Console.WriteLine("[ML Service] Empty text received, returning Uncategorized");
                return "Uncategorized";
            }

            // Truncate very long text
            if (text.Length > 1000)
            {
                text = text.Substring(0, 1000);
            }

            // Prepare request payload
            var payload = new { text = text };

            try
            {
                Console.WriteLine($"[ML Service] Categorizing: {text.Substring(0, Math.Min(50, text.Length))}...");

                // Create HTTP POST request
                var request = new HttpRequestMessage(HttpMethod.Post, $"{_pythonApiUrl}/categorize");
                request.Content = new StringContent(
                    JsonConvert.SerializeObject(payload),
                    Encoding.UTF8,
                    "application/json"
                );

                // Send request
                var response = await _httpClient.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    // Parse response
                    var responseString = await response.Content.ReadAsStringAsync();
                    var result = JsonConvert.DeserializeObject<dynamic>(responseString);

                    string category = result.category;
                    double? confidence = result.confidence;

                    if (confidence.HasValue)
                    {
                        Console.WriteLine($"[ML Service] → Category: {category}, Confidence: {confidence.Value:P2}");
                    }
                    else
                    {
                        Console.WriteLine($"[ML Service] → Category: {category}");
                    }

                    return category;
                }
                else
                {
                    var errorContent = await response.Content.ReadAsStringAsync();
                    Console.WriteLine($"[ML Service] Error: {response.StatusCode} - {errorContent}");
                    return "Uncategorized";
                }
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"[ML Service] HTTP Error: {ex.Message}");
                Console.WriteLine("[ML Service] ⚠️  Make sure Python API is running on port 5001!");
                return "Uncategorized";
            }
            catch (TaskCanceledException ex)
            {
                Console.WriteLine($"[ML Service] Timeout: {ex.Message}");
                return "Uncategorized";
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[ML Service] Unexpected Error: {ex.Message}");
                return "Uncategorized";
            }
        }
    }
}