using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text;
using System.Threading;
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
        private readonly string _googleApiKey;
        private readonly string _modelName;
        private const string GoogleAIUrl = "https://generativelanguage.googleapis.com/v1beta/models";
        private static readonly SemaphoreSlim _rateLimiter = new SemaphoreSlim(3, 3); // Max 3 concurrent requests to Google API

        public CategorizationService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _googleApiKey = configuration["GoogleAI:ApiKey"] ?? throw new InvalidOperationException("GoogleAI:ApiKey not configured");
            _modelName = configuration["GoogleAI:ModelName"] ?? "gemini-2.5-flash-lite";

            Console.WriteLine($"[Categorization Service] Using Google AI API with model: {_modelName}");
        }

        public async Task<string> CategorizeContentAsync(string text)
        {
            return await CategorizeWithRetryAsync(text, maxRetries: 3);
        }

        private async Task<string> CategorizeWithRetryAsync(string text, int maxRetries = 3, int delayMs = 1000)
        {
            // Return "Uncategorized" for empty text
            if (string.IsNullOrWhiteSpace(text))
            {
                Console.WriteLine("[Categorization Service] Empty text received, returning Uncategorized");
                return "Uncategorized";
            }

            // Truncate very long text (keep within reasonable limits)
            if (text.Length > 2000)
            {
                text = text.Substring(0, 2000);
            }

            for (int attempt = 1; attempt <= maxRetries; attempt++)
            {
                try
                {
                    Console.WriteLine($"[Categorization Service] Attempt {attempt}/{maxRetries}: Categorizing: {text.Substring(0, Math.Min(50, text.Length))}...");

                    // Rate limiting - wait for a slot
                    await _rateLimiter.WaitAsync();

                    try
                    {
                        return await CategorizeAsync(text);
                    }
                    finally
                    {
                        _rateLimiter.Release();
                    }
                }
                catch (HttpRequestException ex) when (ex.Message.Contains("429") || ex.Message.Contains("TooManyRequests"))
                {
                    Console.WriteLine($"[Categorization Service] ⚠️  Rate limited (429). Attempt {attempt}/{maxRetries}. Waiting {delayMs}ms before retry...");
                    
                    if (attempt < maxRetries)
                    {
                        await Task.Delay(delayMs);
                        delayMs = Math.Min(delayMs * 2, 60000); // Exponential backoff, max 60s
                    }
                }
                catch (TaskCanceledException) when (attempt < maxRetries)
                {
                    Console.WriteLine($"[Categorization Service] ⏱️  Timeout on attempt {attempt}/{maxRetries}. Retrying...");
                    await Task.Delay(delayMs);
                    delayMs = Math.Min(delayMs * 2, 60000);
                }
                catch (HttpRequestException ex) when (attempt < maxRetries)
                {
                    Console.WriteLine($"[Categorization Service] HTTP Error on attempt {attempt}/{maxRetries}: {ex.Message}. Retrying...");
                    await Task.Delay(delayMs);
                    delayMs = Math.Min(delayMs * 2, 60000);
                }
            }

            // All retries exhausted
            Console.WriteLine($"[Categorization Service] ❌ Failed to categorize after {maxRetries} attempts. Returning 'Uncategorized'");
            return "Uncategorized";
        }

        private async Task<string> CategorizeAsync(string text)
        {
            // Prepare the Google AI API request
            var payload = new
            {
                contents = new[]
                {
                    new
                    {
                        parts = new[]
                        {
                            new
                            {
                                text = $"Categorize the following YouTube video content into ONE of these categories: Music, Gaming, Education, Entertainment, News, Sports, Technology, Lifestyle, Business, or Other.\n\nContent: {text}\n\nRespond with ONLY the category name, nothing else."
                            }
                        }
                    }
                }
            };

            var url = $"{GoogleAIUrl}/{_modelName}:generateContent?key={_googleApiKey}";
            
            var request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Content = new StringContent(
                JsonConvert.SerializeObject(payload),
                Encoding.UTF8,
                "application/json"
            );

            // Send request
            var response = await _httpClient.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var responseString = await response.Content.ReadAsStringAsync();
                Console.WriteLine($"[Categorization Service] API Response: {responseString.Substring(0, Math.Min(200, responseString.Length))}");
                
                var result = JsonConvert.DeserializeObject<dynamic>(responseString);

                // Check if result is null
                if (result == null)
                {
                    Console.WriteLine("[Categorization Service] API returned null response");
                    throw new InvalidOperationException("API returned null result");
                }

                // Extract the category from the response
                var candidates = result["candidates"];
                if (candidates == null)
                {
                    Console.WriteLine("[Categorization Service] No 'candidates' in response");
                    Console.WriteLine($"[Categorization Service] Full response: {responseString}");
                    throw new InvalidOperationException("No candidates in response");
                }

                string responseText = result["candidates"][0]["content"]["parts"][0]["text"];
                
                if (string.IsNullOrEmpty(responseText))
                {
                    Console.WriteLine("[Categorization Service] Empty response text from API");
                    throw new InvalidOperationException("Empty response text");
                }

                string category = responseText.Trim().Split('\n')[0]; // Get first line only
                
                // Validate category
                var validCategories = new[] { "Music", "Gaming", "Education", "Entertainment", "News", "Sports", "Technology", "Lifestyle", "Business", "Other" };
                if (!Array.Exists(validCategories, element => element.Equals(category, StringComparison.OrdinalIgnoreCase)))
                {
                    category = "Other";
                }

                Console.WriteLine($"[Categorization Service] → Category: {category}");
                return category;
            }
            else if ((int)response.StatusCode == 429)
            {
                // Rate limited - rethrow as HttpRequestException with "429"
                throw new HttpRequestException("429 - Too Many Requests");
            }
            else
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                Console.WriteLine($"[Categorization Service] ❌ API Error: {response.StatusCode}");
                Console.WriteLine($"[Categorization Service] Error Response: {errorContent}");
                throw new HttpRequestException($"API returned {response.StatusCode}: {errorContent}");
            }
        }
    }
}