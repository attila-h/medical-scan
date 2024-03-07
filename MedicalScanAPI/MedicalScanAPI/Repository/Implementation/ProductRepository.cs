using MedicalScanAPI.Model.Entity;
using MedicalScanAPI.Repository.Abstract;
using MedicalScanAPI.Repository.Interface;

namespace MedicalScanAPI.Repository.Implementation
{
    public class ProductRepository : RepositoryBase<ProductEntity>, IProductRepository
    {
        public ProductRepository(ApiContext context) : base(context)
        {
        }
    }
}
