using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Core.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Label { get; set; }

        // Navigation property
        public ICollection<Video> Videos { get; set; } = new List<Video>();
    }
}
