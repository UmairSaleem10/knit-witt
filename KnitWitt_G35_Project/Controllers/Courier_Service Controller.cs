using KnitWitt_G35_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Courier_ServiceController : ControllerBase
    {
        private readonly Courier_Service_Context courier_Service_context;
        public string connectionString = "Server=tcp:fraz-azure-server.database.windows.net,1433;Initial Catalog=KnittWitt;Persist Security Info=False;User ID=admin-is-fraz;Password=Greyparrot54321*;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        public Courier_ServiceController(Courier_Service_Context cc)
        {
            courier_Service_context = cc;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Courier_Service>>> GetEmployees()
        {
            if (courier_Service_context.Courier_Service == null)
            {
                return NotFound();
            }
            return await courier_Service_context.Courier_Service.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Courier_Service>> GetEmployees(int id)
        {
            if (courier_Service_context.Courier_Service == null)
            {
                return NotFound();
            }
            var employee = await courier_Service_context.Courier_Service.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }


        [HttpPost]
        public async Task<ActionResult<Courier_Service>> PostEmployee(Courier_Service Courier_Service)
        {
            courier_Service_context.Courier_Service.Add(Courier_Service);
            await courier_Service_context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployees), new { id = Courier_Service.Transport_Id }, Courier_Service);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutEmployee(int id, Courier_Service requestParams1)
        {
            if (id != requestParams1.Transport_Id)
            {
                return BadRequest();
            }

            courier_Service_context.Entry(requestParams1).State = EntityState.Modified;
            try
            {
                await courier_Service_context.SaveChangesAsync();
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
            if (courier_Service_context.Courier_Service == null)
            {
                return NotFound();
            }

            var employee = await courier_Service_context.Courier_Service.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            courier_Service_context.Courier_Service.Remove(employee);
            await courier_Service_context.SaveChangesAsync();


            return Ok();
        }
    }
}
