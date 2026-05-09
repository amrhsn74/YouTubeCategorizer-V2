namespace YouTubeCategorizer.Application.DTOs
{
    public class AuthServiceResultDto
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public string? ErrorCode { get; set; }
        public AuthUserDto? User { get; set; }
    }
}
