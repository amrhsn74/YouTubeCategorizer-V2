using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Core.Entities
{
    public class Channel
    {
        public int Id { get; set; }
        public string ChannelId { get; set; } = string.Empty;
        public string ChannelUrl { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;

        // Navigation property
        public ICollection<Video> Videos { get; set; } = new List<Video>();
    }
}
