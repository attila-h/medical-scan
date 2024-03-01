using MedicalScanAPI.Model;
using MedicalScanAPI.Repository.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedicalScanAPI.Repository.Abstract
{
    public abstract class RepositoryBase<T> : ControllerBase, IRepository<T> where T : class, IEntity
    {
        protected readonly DbContext context;
        protected DbSet<T> dbSet;

        public RepositoryBase(ApiContext context)
        {
            this.context = context;
            dbSet = context.Set<T>();
        }

        //GetAll Request
        public async Task<ActionResult<IEnumerable<T>>> GetAll()
        {
            var dataList = await dbSet.ToListAsync();
            return Ok(dataList);
        }

        //Get Request
        public async Task<ActionResult<T>> Get(int id)
        {
            var data = await dbSet.FindAsync(id);
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

        //Create Request
        public async Task<ActionResult<T>> Create(T entity)
        {
            dbSet.Add(entity);
            await context.SaveChangesAsync();
            return entity;
        }

        //Update Request
        public async Task<IActionResult> Update(int id, T entity)
        {
            if (id != entity.Id)
            {
                return BadRequest();
            }

            var data = await dbSet.FindAsync(id);
            if (data == null)
            {
                return NotFound();
            }

            context.Entry(data).CurrentValues.SetValues(entity);

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }

        //Delete Request
        public async Task<IActionResult> Delete(int id)
        {
            var data = await dbSet.FindAsync(id);
            if (data == null)
            {
                return NotFound();
            }

            dbSet.Remove(data);
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
