using Microsoft.EntityFrameworkCore;
using YouTubeCategorizer.Core.Entities;
using YouTubeCategorizer.Core.Interfaces;
using YouTubeCategorizer.Infrastructure.Data;

namespace YouTubeCategorizer.Infrastructure.Repositories
{
    public class ChannelRepository : GenericRepository<Channel>, IChannelRepository
    {
        public ChannelRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Channel?> GetByChannelIdAsync(string channelId)
        {
            return await _context.Channels
                .FirstOrDefaultAsync(c => c.ChannelId == channelId);
        }
    }
}