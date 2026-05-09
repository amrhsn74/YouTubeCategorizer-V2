using Microsoft.AspNetCore.Mvc;
using YouTubeCategorizer.API.Services;
using YouTubeCategorizer.Application.DTOs;
using YouTubeCategorizer.Application.Services;

namespace YouTubeCategorizer.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly IJwtTokenService _jwtTokenService;

        public AuthController(IAuthService authService, IJwtTokenService jwtTokenService)
        {
            _authService = authService;
            _jwtTokenService = jwtTokenService;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] SignUpRequestDto request)
        {
            if (!ModelState.IsValid)
            {
                return ValidationProblem(ModelState);
            }

            var result = await _authService.SignUpAsync(request);
            if (!result.Success)
            {
                if (result.ErrorCode == "email_exists")
                {
                    return Conflict(new { message = result.Message });
                }

                return BadRequest(new { message = result.Message });
            }

            if (result.User == null)
            {
                return StatusCode(500, new { message = "Failed to create user." });
            }

            var token = _jwtTokenService.CreateToken(result.User);

            return Ok(new AuthResponseDto
            {
                Message = result.Message,
                Token = token.Token,
                ExpiresAtUtc = token.ExpiresAtUtc,
                User = result.User
            });
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] SignInRequestDto request)
        {
            if (!ModelState.IsValid)
            {
                return ValidationProblem(ModelState);
            }

            var result = await _authService.SignInAsync(request);
            if (!result.Success)
            {
                return Unauthorized(new { message = result.Message });
            }

            if (result.User == null)
            {
                return StatusCode(500, new { message = "Failed to sign in user." });
            }

            var token = _jwtTokenService.CreateToken(result.User);

            return Ok(new AuthResponseDto
            {
                Message = result.Message,
                Token = token.Token,
                ExpiresAtUtc = token.ExpiresAtUtc,
                User = result.User
            });
        }
    }

    public class AuthResponseDto
    {
        public string Message { get; set; } = string.Empty;
        public string Token { get; set; } = string.Empty;
        public DateTime ExpiresAtUtc { get; set; }
        public AuthUserDto User { get; set; } = new();
    }
}
