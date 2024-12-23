using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Models
{
    public class PersonContext : DbContext
    {
        public PersonContext(DbContextOptions<PersonContext> options) : base(options)
        {

        }
        public DbSet<Person> Person { get; set; }
    }
}
