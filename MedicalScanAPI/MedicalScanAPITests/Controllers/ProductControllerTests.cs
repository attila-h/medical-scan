using MedicalScanAPI.Model.DTO;
using MedicalScanAPI.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace MedicalScanAPI.Controllers.Tests
{
    [TestClass()]
    public class ProductControllerTests
    {

        [TestMethod]
        public async Task GetProductShouldReturnCorrectData()
        {
            // Arrange
            var productServiceMock = new Mock<IProductService>();
            var controller = new ProductController(productServiceMock.Object);
            var productId = 1;
            var productDto = new GetProductDTO { Id = productId, Name = "Test Product", Description = "Test Description", Price = 10 };

            productServiceMock.Setup(service => service.Get(productId))
                .ReturnsAsync(new ActionResult<GetProductDTO>(productDto));

            // Act
            var result = await controller.Get(productId) as ActionResult<GetProductDTO>;

            // Assert
            Assert.IsNotNull(result);
            Assert.IsInstanceOfType(result, typeof(ActionResult<GetProductDTO>));
            Assert.AreEqual(productId, result.Value.Id);
            Assert.AreEqual(productDto.Name, result.Value.Name);
            Assert.AreEqual(productDto.Description, result.Value.Description);
            Assert.AreEqual(productDto.Price, result.Value.Price);
        }

    }
}