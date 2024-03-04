using AutoMapper;
using MedicalScanAPI.Model.DTO;
using MedicalScanAPI.Model.Entity;
using MedicalScanAPI.Repository.Interface;
using MedicalScanAPI.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace MedicalScanAPI.Services.Implementation
{
    public class ProductService : ControllerBase, IProductService
    {
        private IProductRepository productRepository;
        private IMapper mapper;

        public ProductService(IProductRepository productRepository, IMapper mapper) 
        {
            this.productRepository = productRepository;
            this.mapper = mapper;
        }

        public async Task<ActionResult<GetProductDTO>> Create(SetProductDTO dto)
        {
            ProductEntity entity = await productRepository.Create(mapper.Map<ProductEntity>(dto));
            return Ok(mapper.Map<GetProductDTO>(entity));
        }

        public async Task<IActionResult> Delete(int id)
        {
            ProductEntity? data = await productRepository.Get(id);
            if (data == null)
            {
                return NotFound();
            }
            await productRepository.Delete(id);
            return NoContent();
        }

        public async Task<ActionResult<GetProductDTO>> Get(int id)
        {
            ProductEntity? entity = await productRepository.Get(id);
            if (entity == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<GetProductDTO>(entity));
        }

        public async Task<ActionResult<IEnumerable<GetProductDTO>>> GetAll()
        {
            IEnumerable<ProductEntity> entities = await productRepository.GetAll();
            IEnumerable<GetProductDTO> dtos = mapper.Map<IEnumerable<ProductEntity>, IEnumerable<GetProductDTO>>(entities);
            return Ok(dtos);
        }

        public async Task<IActionResult> Update(int id, SetProductDTO dto)
        {
            ProductEntity? entity = await productRepository.Get(id);
            if (entity == null)
            {
                return NotFound();
            }

            entity = mapper.Map(dto, entity);
            await productRepository.Update(entity); ;
            return NoContent();
        }
    }
}
