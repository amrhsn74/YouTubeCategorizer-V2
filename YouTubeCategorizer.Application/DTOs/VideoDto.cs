using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Application.DTOs
{
    public class VideoDto
    {
        public int Id { get; set; }
        public string VideoId { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ChannelName { get; set; } = string.Empty;
        public string CategoryLabel { get; set; } = string.Empty;
    }
}
