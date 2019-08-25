using Microsoft.EntityFrameworkCore;
using SambatApp.API.Models;

namespace SambatApp.API.Data
{
    public class DataContext : DbContext
    {
        // Constructor untuk menjalankan DbContext dari Entity Framework
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {}

        public DbSet<Value> Values { get; set; }
    }
}