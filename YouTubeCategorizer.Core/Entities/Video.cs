using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Core.Entities
{
    public class Video
    {
        public int Id { get; set; }
        public string VideoId { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }

        // Foreign key and navigation property
        public int ChannelId { get; set; }
        public Channel Channel { get; set; }

        public int? CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
