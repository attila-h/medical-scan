namespace MedicalScanAPI.Repository.Interface
{
    public interface IRepository<T> where T : class
    {
        public Task<IEnumerable<T>> GetAll();
        public Task<T?> Get(int id);
        public Task<T> Create(T entity);
        public Task Update(T entity);
        public Task Delete(int id);
    }
}
