using KnitWitt_G35_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KnitWitt_G35_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Raw_MaterialController : ControllerBase
    {
        
        private readonly Raw_Material_Context raw_Material_context;
        public string connectionString = "Server=tcp:fraz-azure-server.database.windows.net,1433;Initial Catalog=KnittWitt;Persist Security Info=False;User ID=admin-is-fraz;Password=Greyparrot54321*;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

        public Raw_MaterialController(Raw_Material_Context rc)
        {
            raw_Material_context = rc;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RawMaterial>>> GetEmployees()
        {
            if (raw_Material_context.RawMaterial == null)
            {
                return NotFound();
            }
            return await raw_Material_context.RawMaterial.ToListAsync();

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RawMaterial>> GetEmployees(int id)
        {
            if (raw_Material_context.RawMaterial == null)
            {
                return NotFound();
            }
            var raw_Material = await raw_Material_context.RawMaterial.FindAsync(id);
            if (raw_Material == null)
            {
                return NotFound();
            }
            return raw_Material;
        }


        [HttpPost]
        public async Task<ActionResult<RawMaterial>> PostEmployee(RawMaterial raw_Material)
        {
            raw_Material_context.RawMaterial.Add(raw_Material);
            await raw_Material_context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployees), new { id = raw_Material.Id }, raw_Material);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutEmployee(int id, RawMaterial requestParams1)
        {
            if (id != requestParams1.Id)
            {
                return BadRequest();
            }

            raw_Material_context.Entry(requestParams1).State = EntityState.Modified;
            try
            {
                await raw_Material_context.SaveChangesAsync();
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
            if (raw_Material_context.RawMaterial == null)
            {
                return NotFound();
            }

            var employee = await raw_Material_context.RawMaterial.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            raw_Material_context.RawMaterial.Remove(employee);
            await raw_Material_context.SaveChangesAsync();


            return Ok();
        }
    }
}

