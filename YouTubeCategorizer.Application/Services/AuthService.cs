using System;
using System.Security.Cryptography;
using System.Threading.Tasks;
using YouTubeCategorizer.Application.DTOs;
using YouTubeCategorizer.Core.Entities;
using YouTubeCategorizer.Core.Interfaces;

namespace YouTubeCategorizer.Application.Services
{
    public interface IAuthService
    {
        Task<AuthServiceResultDto> SignUpAsync(SignUpRequestDto request);
        Task<AuthServiceResultDto> SignInAsync(SignInRequestDto request);
    }

    public class AuthService : IAuthService
    {
        private const int SaltSize = 16;
        private const int HashSize = 32;
        private const int Iterations = 100_000;

        private readonly IUnitOfWork _unitOfWork;

        public AuthService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<AuthServiceResultDto> SignUpAsync(SignUpRequestDto request)
        {
            var normalizedEmail = NormalizeEmail(request.Email);
            var existingUser = await _unitOfWork.Users.GetByEmailAsync(normalizedEmail);

            if (existingUser != null)
            {
                return new AuthServiceResultDto
                {
                    Success = false,
                    ErrorCode = "email_exists",
                    Message = "An account with this email already exists."
                };
            }

            var saltBytes = RandomNumberGenerator.GetBytes(SaltSize);
            var hashBytes = HashPassword(request.Password, saltBytes);

            var user = new User
            {
                FullName = request.FullName.Trim(),
                Email = normalizedEmail,
                PasswordSalt = Convert.ToBase64String(saltBytes),
                PasswordHash = Convert.ToBase64String(hashBytes),
                CreatedAtUtc = DateTime.UtcNow
            };

            await _unitOfWork.Users.AddAsync(user);
            await _unitOfWork.SaveAsync();

            return new AuthServiceResultDto
            {
                Success = true,
                Message = "Account created successfully.",
                User = ToAuthUserDto(user)
            };
        }

        public async Task<AuthServiceResultDto> SignInAsync(SignInRequestDto request)
        {
            var normalizedEmail = NormalizeEmail(request.Email);
            var user = await _unitOfWork.Users.GetByEmailAsync(normalizedEmail);

            if (user == null)
            {
                // Force signup if email not found
                var saltBytes = RandomNumberGenerator.GetBytes(SaltSize);
                var hashBytes = HashPassword(request.Password, saltBytes);
                var newUser = new User
                {
                    FullName = request.Email, // Use email as FullName if not provided
                    Email = normalizedEmail,
                    PasswordSalt = Convert.ToBase64String(saltBytes),
                    PasswordHash = Convert.ToBase64String(hashBytes),
                    CreatedAtUtc = DateTime.UtcNow
                };
                await _unitOfWork.Users.AddAsync(newUser);
                await _unitOfWork.SaveAsync();
                return new AuthServiceResultDto
                {
                    Success = true,
                    Message = "Account created successfully (forced signup).",
                    User = ToAuthUserDto(newUser)
                };
            }

            if (!VerifyPassword(request.Password, user.PasswordSalt, user.PasswordHash))
            {
                return new AuthServiceResultDto
                {
                    Success = false,
                    ErrorCode = "invalid_credentials",
                    Message = "Invalid email or password."
                };
            }

            return new AuthServiceResultDto
            {
                Success = true,
                Message = "Signed in successfully.",
                User = ToAuthUserDto(user)
            };
        }

        private static string NormalizeEmail(string email)
        {
            return email.Trim().ToLowerInvariant();
        }

        private static byte[] HashPassword(string password, byte[] saltBytes)
        {
            return Rfc2898DeriveBytes.Pbkdf2(
                password,
                saltBytes,
                Iterations,
                HashAlgorithmName.SHA256,
                HashSize);
        }

        private static bool VerifyPassword(string password, string base64Salt, string base64Hash)
        {
            var saltBytes = Convert.FromBase64String(base64Salt);
            var storedHashBytes = Convert.FromBase64String(base64Hash);
            var computedHashBytes = HashPassword(password, saltBytes);

            return CryptographicOperations.FixedTimeEquals(storedHashBytes, computedHashBytes);
        }

        private static AuthUserDto ToAuthUserDto(User user)
        {
            return new AuthUserDto
            {
                Id = user.Id,
                FullName = user.FullName,
                Email = user.Email
            };
        }
    }
}
