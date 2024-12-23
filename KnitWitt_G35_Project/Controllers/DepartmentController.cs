using KnitWitt_G35_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly DepartmentContext departmentContext;
        public string connectionString = "Server=tcp:fraz-azure-server.database.windows.net,1433;Initial Catalog=KnittWitt;Persist Security Info=False;User ID=admin-is-fraz;Password=Greyparrot54321*;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        public DepartmentController(DepartmentContext dc)
        {
            departmentContext = dc;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetEmployees()
        {
            if (departmentContext.Department == null)
            {
                return NotFound();
            }
            return await departmentContext.Department.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Department>> GetEmployees(int id)
        {
            if (departmentContext.Department == null)
            {
                return NotFound();
            }
            var employee = await departmentContext.Department.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }


        [HttpPost]
        public async Task<ActionResult<Department>> PostEmployee(Department department)
        {
            departmentContext.Department.Add(department);
            await departmentContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployees), new { id = department.Department_Id}, department);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutEmployee(int id, Department department)
        {
            if (id != department.Department_Id)
            {
                return BadRequest();
            }

            departmentContext.Entry(department).State = EntityState.Modified;
            try
            {
                await departmentContext.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteEmployees(int id)
        {
            if (departmentContext.Department == null)
            {
                return NotFound();
            }

            var employee = await departmentContext.Department.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            departmentContext.Department.Remove(employee);
            await departmentContext.SaveChangesAsync();


            return Ok();
        }
    }
}
