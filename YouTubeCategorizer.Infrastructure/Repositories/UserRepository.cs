using Microsoft.EntityFrameworkCore;
using YouTubeCategorizer.Core.Entities;
using YouTubeCategorizer.Core.Interfaces;
using YouTubeCategorizer.Infrastructure.Data;

namespace YouTubeCategorizer.Infrastructure.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
