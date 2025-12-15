using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YouTubeCategorizer.Core.Entities;

namespace YouTubeCategorizer.Core.Interfaces
{
    public interface IVideoRepository : IGenericRepository<Video>
    {
        Task<IEnumerable<Video>> GetVideosByChannelIdAsync(int channelId);
        Task<IEnumerable<Video>> GetAllWithDetailsAsync();
    }
}
