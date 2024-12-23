using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Models
{
    public class Raw_Material_Context:DbContext
    {
        public Raw_Material_Context(DbContextOptions<Raw_Material_Context> options) : base(options)
        {

        }
        public DbSet<RawMaterial> RawMaterial { get; set; }
    }
}
