using System.Threading.Tasks;
using YouTubeCategorizer.Core.Entities;

namespace YouTubeCategorizer.Core.Interfaces
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<User?> GetByEmailAsync(string email);
    }
}
