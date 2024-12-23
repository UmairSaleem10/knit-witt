using KnitWitt_G35_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

namespace KnitWitt_G35_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customer_Company_Controller : ControllerBase
    {
        private readonly Customer_Company_Context customer_Company_Context;
        public string connectionString = "Server=tcp:fraz-azure-server.database.windows.net,1433;Initial Catalog=KnittWitt;Persist Security Info=False;User ID=admin-is-fraz;Password=Greyparrot54321*;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        public Customer_Company_Controller(Customer_Company_Context ccc)
        {
            customer_Company_Context = ccc;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer_Company>>> GetEmployees()
        {
            if (customer_Company_Context.Customer_Company == null)
            {
                return NotFound();
            }
            return await customer_Company_Context.Customer_Company.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer_Company>> GetEmployees(int id)
        {
            if (customer_Company_Context.Customer_Company == null)
            {
                return NotFound();
            }
            var employee = await customer_Company_Context.Customer_Company.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }


        [HttpPost]
        public async Task<ActionResult<Customer_Company>> PostEmployee(Customer_Company Customer_Company)
        {
            customer_Company_Context.Customer_Company.Add(Customer_Company);
            await customer_Company_Context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployees), new { id = Customer_Company.Customer_Id }, Customer_Company);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutEmployee(int id, Customer_Company customer_Company)
        {
            if (id != customer_Company.Customer_Id)
            {
                return BadRequest();
            }

            customer_Company_Context.Entry(customer_Company).State = (Microsoft.EntityFrameworkCore.EntityState)EntityState.Modified;
            try
            {
                await customer_Company_Context.SaveChangesAsync();
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
            if (customer_Company_Context.Customer_Company == null)
            {
                return NotFound();
            }

            var employee = await customer_Company_Context.Customer_Company.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            customer_Company_Context.Customer_Company.Remove(employee);
            await customer_Company_Context.SaveChangesAsync();


            return Ok();
        }
    }
}

