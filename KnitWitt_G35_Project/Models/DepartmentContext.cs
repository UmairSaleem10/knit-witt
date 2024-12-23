using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Models
{
    public class DepartmentContext:DbContext
    {
        public DepartmentContext(DbContextOptions<DepartmentContext> options) : base(options)
        {

        }
        public DbSet<Department> Department { get; set; }
    }
}
