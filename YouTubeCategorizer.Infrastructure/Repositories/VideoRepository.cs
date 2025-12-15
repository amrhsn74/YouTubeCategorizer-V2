using Microsoft.EntityFrameworkCore;
using YouTubeCategorizer.Core.Entities;
using YouTubeCategorizer.Core.Interfaces;
using YouTubeCategorizer.Infrastructure.Data;

namespace YouTubeCategorizer.Infrastructure.Repositories
{
    public class VideoRepository : GenericRepository<Video>, IVideoRepository
    {
        public VideoRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Video>> GetAllWithDetailsAsync()
        {
            return await _context.Videos
                .Include(v => v.Channel)
                .Include(v => v.Category)
                .ToListAsync();
        }

        public async Task<IEnumerable<Video>> GetVideosByChannelIdAsync(int channelId)
        {
            return await _context.Videos
                .Where(v => v.ChannelId == channelId)
                .ToListAsync();
        }
    }
}