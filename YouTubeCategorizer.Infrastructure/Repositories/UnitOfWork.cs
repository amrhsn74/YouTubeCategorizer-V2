using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YouTubeCategorizer.Core.Interfaces;
using YouTubeCategorizer.Infrastructure.Data;

namespace YouTubeCategorizer.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        public IChannelRepository Channels { get; }
        public IVideoRepository Videos { get; }
        public ICategoryRepository Categories { get; }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
            Channels = new ChannelRepository(_context);
            Videos = new VideoRepository(_context);
            Categories = new CategoryRepository(_context);
        }

        public async Task<int> SaveAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
