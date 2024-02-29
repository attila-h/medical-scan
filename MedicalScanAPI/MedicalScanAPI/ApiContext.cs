using MedicalScanAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace MedicalScanAPI
{
    public class ApiContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "MedicalScanDb");
        }

        public DbSet<Product> Products { get; set; }

    }
}
