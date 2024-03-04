using MedicalScanAPI.Model.DTO;
using MedicalScanAPI.Services.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MedicalScanAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public Task<ActionResult<IEnumerable<GetProductDTO>>> Get()
        {
            return productService.GetAll();
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public Task<ActionResult<GetProductDTO>> Get(int id)
        {
            return productService.Get(id);
        }

        // POST api/<ProductController>
        [HttpPost]
        public Task<ActionResult<GetProductDTO>> Post([FromBody] SetProductDTO dto)
        {
            return productService.Create(dto);
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public Task<ActionResult<GetProductDTO>> Put(int id, [FromBody] SetProductDTO dto)
        {
            return productService.Update(id, dto);
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public Task<IActionResult> Delete(int id)
        {
            return productService.Delete(id);
        }
    }
}
