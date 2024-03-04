using MedicalScanAPI.Model;
using MedicalScanAPI.Repository.Interface;
using MedicalScanAPI.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace MedicalScanAPI.Services.Implementation
{
    public class ProductService : IProductService
    {
        private IProductRepository productRepository;

        public ProductService(IProductRepository productRepository) 
        {
            this.productRepository = productRepository;
        }

        public Task<ActionResult<Product>> Create(Product entity)
        {
            return productRepository.Create(entity);
        }

        public Task<IActionResult> Delete(int id)
        {
            return productRepository.Delete(id);
        }

        public Task<ActionResult<Product>> Get(int id)
        {
            return productRepository.Get(id);
        }

        public Task<ActionResult<IEnumerable<Product>>> GetAll()
        {
            return productRepository.GetAll();
        }

        public Task<IActionResult> Update(int id, Product entity)
        {
            return productRepository.Update(id, entity);
        }
    }
}
