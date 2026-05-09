using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using YouTubeCategorizer.Application.DTOs;

namespace YouTubeCategorizer.API.Services
{
    public interface IJwtTokenService
    {
        AuthTokenResult CreateToken(AuthUserDto user);
    }

    public class JwtTokenService : IJwtTokenService
    {
        private readonly IConfiguration _configuration;

        public JwtTokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public AuthTokenResult CreateToken(AuthUserDto user)
        {
            var key = _configuration["Jwt:Key"] ?? throw new InvalidOperationException("JWT signing key is missing.");
            if (key.Length < 32)
            {
                throw new InvalidOperationException("JWT signing key must be at least 32 characters.");
            }

            var issuer = _configuration["Jwt:Issuer"] ?? "YouTubeCategorizer.API";
            var audience = _configuration["Jwt:Audience"] ?? "YouTubeCategorizer.Client";
            var expiryMinutes = _configuration.GetValue("Jwt:ExpiryMinutes", 120);
            var expiresAtUtc = DateTime.UtcNow.AddMinutes(expiryMinutes);

            var claims = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new(JwtRegisteredClaimNames.Email, user.Email),
                new(JwtRegisteredClaimNames.Name, user.FullName),
                new(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new(ClaimTypes.Email, user.Email),
                new(ClaimTypes.Name, user.FullName)
            };

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: expiresAtUtc,
                signingCredentials: credentials);

            return new AuthTokenResult
            {
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                ExpiresAtUtc = expiresAtUtc
            };
        }
    }

    public class AuthTokenResult
    {
        public string Token { get; set; } = string.Empty;
        public DateTime ExpiresAtUtc { get; set; }
    }
}
