using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YouTubeCategorizer.Core.Entities;

namespace YouTubeCategorizer.Core.Interfaces
{
    public interface IChannelRepository : IGenericRepository<Channel>
    {
        Task<Channel?> GetByChannelIdAsync(string channelId);
    }
}
