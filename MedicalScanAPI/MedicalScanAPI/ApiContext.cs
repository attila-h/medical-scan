using MedicalScanAPI.Model.Entity;
using Microsoft.EntityFrameworkCore;

namespace MedicalScanAPI
{
    public class ApiContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "MedicalScanDb");
        }

        public DbSet<ProductEntity>? Products { get; set; }

    }
}
