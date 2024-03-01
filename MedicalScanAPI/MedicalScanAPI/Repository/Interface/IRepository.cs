using Microsoft.AspNetCore.Mvc;

namespace MedicalScanAPI.Repository.Interface
{
    public interface IRepository<T> where T : class
    {
        public Task<ActionResult<IEnumerable<T>>> GetAll();
        public Task<ActionResult<T>> Get(int id);
        public Task<ActionResult<T>> Create(T entity);
        public Task<IActionResult> Update(int id, T entity);
        public Task<IActionResult> Delete(int id);
    }
}
