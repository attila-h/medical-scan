using AutoMapper;
using MedicalScanAPI.Model.DTO;
using MedicalScanAPI.Model.Entity;

namespace MedicalScanAPI.Mapper
{
    public class ProductMappingProfile : Profile
    {
        public ProductMappingProfile()
        {
            CreateMap<ProductEntity, GetProductDTO>();
            CreateMap<SetProductDTO, ProductEntity>();
        }
    }
}
