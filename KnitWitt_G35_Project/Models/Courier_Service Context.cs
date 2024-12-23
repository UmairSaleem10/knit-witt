using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Models
{
    public class Courier_Service_Context : DbContext
    {
        public Courier_Service_Context(DbContextOptions<Courier_Service_Context> options) : base(options)
        {

        }
        public DbSet<Courier_Service> Courier_Service { get; set; }
    }
}
