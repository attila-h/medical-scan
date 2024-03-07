using MedicalScanAPI.Model.DTO;
using Microsoft.AspNetCore.Mvc;

namespace MedicalScanAPI.Services.Interface
{
    public interface IProductService
    {
        public Task<ActionResult<IEnumerable<GetProductDTO>>> GetAll();
        public Task<ActionResult<GetProductDTO>> Get(int id);
        public Task<ActionResult<GetProductDTO>> Create(SetProductDTO entity);
        public Task<ActionResult<GetProductDTO>> Update(int id, SetProductDTO entity);
        public Task<IActionResult> Delete(int id);
    }
}
