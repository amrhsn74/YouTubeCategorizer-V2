using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IChannelRepository Channels { get; }
        IVideoRepository Videos { get; }
        ICategoryRepository Categories { get; }
        Task<int> SaveAsync();
    }
}
