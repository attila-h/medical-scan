using MedicalScanAPI.Model;
using MedicalScanAPI.Repository.Abstract;
using MedicalScanAPI.Repository.Interface;

namespace MedicalScanAPI.Repository.Implementation
{
    public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(ApiContext context) : base(context)
        {
        }
    }
}
