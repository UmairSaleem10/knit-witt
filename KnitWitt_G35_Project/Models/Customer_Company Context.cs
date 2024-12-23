using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Models
{
    public class Customer_Company_Context:DbContext
    {
         public Customer_Company_Context(DbContextOptions<Customer_Company_Context> options) : base(options)
            {

            }
            public DbSet<Customer_Company> Customer_Company { get; set; }
    }
    
}
