using MedicalScanAPI.Model;
using MedicalScanAPI.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace MedicalScanAPI.Repository.Abstract
{
    public abstract class RepositoryBase<T> : IRepository<T> where T : class, IEntity
    {
        protected readonly DbContext context;
        protected DbSet<T> dbSet;

        public RepositoryBase(ApiContext context)
        {
            this.context = context;
            dbSet = context.Set<T>();
        }

        //GetAll Request
        public async Task<IEnumerable<T>> GetAll()
        {
            List<T> dataList = await dbSet.ToListAsync();
            return dataList;
        }

        //Get Request
        public async Task<T?> Get(int id)
        {
            T? data = await dbSet.SingleOrDefaultAsync(e => e.Id == id);
            return data;
        }

        //Create Request
        public async Task<T> Create(T entity)
        {
            DateTime now = DateTime.UtcNow;
            entity.CreatedAt = now;
            entity.UpdatedAt = now;
            dbSet.Add(entity);
            await context.SaveChangesAsync();
            return entity;
        }

        //Update Request
        public async Task Update(T entity)
        {
            entity.UpdatedAt = DateTime.Now;
            context.Entry(entity).CurrentValues.SetValues(entity);

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
        }

        //Delete Request
        public async Task Delete(int id)
        {
            T? data = await dbSet.FindAsync(id);
            if (data != null)
            {
                dbSet.Remove(data);
            }

            await context.SaveChangesAsync();
        }

    }
}
