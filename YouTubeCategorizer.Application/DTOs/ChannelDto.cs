using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Application.DTOs
{
    public class ChannelDto
    {
        public int Id { get; set; }
        public string ChannelId { get; set; } = string.Empty;
        public string ChannelUrl { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
    }
}
