using Hangfire;
using Microsoft.AspNetCore.Mvc;
using YouTubeCategorizer.Application.DTOs;
using YouTubeCategorizer.Application.Services;

namespace YouTubeCategorizer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VideosController : ControllerBase
    {
        private readonly IVideoProcessingService _videoProcessingService;
        private readonly ICategorizationService _categorizationService;

        public VideosController(IVideoProcessingService videoProcessingService, ICategorizationService categorizationService)
        {
            _videoProcessingService = videoProcessingService;
            _categorizationService = categorizationService;
        }

        [HttpPost("process")]
        public IActionResult ProcessChannels([FromBody] ChannelInputDto input)
        {
            // Queue background job using Hangfire
            BackgroundJob.Enqueue(() => _videoProcessingService.ProcessChannelsAsync(input));

            return Ok(new { message = "Processing started. Videos will be categorized in the background." });
        }

        [HttpGet("categorized")]
        public async Task<ActionResult<CategorizedVideosDto>> GetCategorizedVideos()
        {
            var result = await _videoProcessingService.GetCategorizedVideosAsync();
            return Ok(result);
        }

        [HttpPost("test-categorize")]
        public async Task<IActionResult> TestCategorize([FromBody] TestCategorizeRequest request)
        {
            if (string.IsNullOrWhiteSpace(request?.Text))
            {
                return BadRequest(new { error = "Text is required" });
            }

            var category = await _categorizationService.CategorizeContentAsync(request.Text);
            return Ok(new { text = request.Text, category = category });
        }
    }

    public class TestCategorizeRequest
    {
        public string? Text { get; set; }
    }
}
