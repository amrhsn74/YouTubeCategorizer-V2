using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouTubeCategorizer.Application.DTOs
{
    public class CategorizedVideosDto
    {
        public List<CategoryDto> Categories { get; set; } = new();
    }
}
