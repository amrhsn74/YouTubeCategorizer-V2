using Microsoft.EntityFrameworkCore;
using YouTubeCategorizer.Core.Entities;
using YouTubeCategorizer.Core.Interfaces;
using YouTubeCategorizer.Infrastructure.Data;

namespace YouTubeCategorizer.Infrastructure.Repositories
{
    public class CategoryRepository : GenericRepository<Category>, ICategoryRepository
    {
        public CategoryRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Category?> GetByLabelAsync(string label)
        {
            return await _context.Categories
                .FirstOrDefaultAsync(c => c.Label == label);
        }
    }
}