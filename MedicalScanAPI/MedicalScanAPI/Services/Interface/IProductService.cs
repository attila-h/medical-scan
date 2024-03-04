using MedicalScanAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace MedicalScanAPI.Services.Interface
{
    public interface IProductService
    {
        public Task<ActionResult<IEnumerable<Product>>> GetAll();
        public Task<ActionResult<Product>> Get(int id);
        public Task<ActionResult<Product>> Create(Product entity);
        public Task<IActionResult> Update(int id, Product entity);
        public Task<IActionResult> Delete(int id);
    }
}
