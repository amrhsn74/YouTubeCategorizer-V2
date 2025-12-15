using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YouTubeCategorizer.Core.Entities;

namespace YouTubeCategorizer.Core.Interfaces
{
    public interface ICategoryRepository : IGenericRepository<Category>
    {
        Task<Category?> GetByLabelAsync(string label);
    }
}
