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

        public VideosController(IVideoProcessingService videoProcessingService)
        {
            _videoProcessingService = videoProcessingService;
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
    }
}
