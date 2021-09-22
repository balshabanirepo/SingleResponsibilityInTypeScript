using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataRepository;
using DataRepository.GateWay;
using Microsoft.AspNetCore.Cors;

namespace WebAPIToBeAccessedByAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   //// [EnableCors("_myAllowSpecificOrigins")]
    public class RegistrarsRepositoriesController : ControllerBase
    {
        private readonly DbConext _context;

        public RegistrarsRepositoriesController(DbConext context)
        {
            _context = context;
        }

        // GET: api/RegistrarsRepositories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RegistrarsRepository>>> GetRegistrars()
        {
            return await _context.Registrars.ToListAsync();
        }

        // GET: api/RegistrarsRepositories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RegistrarsRepository>> GetRegistrarsRepository(int id)
        {
            var RegistrarsRepository = await _context.Registrars.FindAsync(id);

            if (RegistrarsRepository == null)
            {
                return NotFound();
            }

            return RegistrarsRepository;
        }

        // PUT: api/RegistrarsRepositories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRegistrarsRepository(int id, RegistrarsRepository RegistrarsRepository)
        {
            if (id != RegistrarsRepository.Id)
            {
                return BadRequest();
            }

            _context.Entry(RegistrarsRepository).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistrarsRepositoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RegistrarsRepositories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<RegistrarsRepository>> PostRegistrarsRepository(RegistrarsRepository RegistrarsRepository)
        {
            _context.Registrars.Add(RegistrarsRepository);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRegistrarsRepository", new { id = RegistrarsRepository.Id }, RegistrarsRepository);
        }

        // DELETE: api/RegistrarsRepositories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RegistrarsRepository>> DeleteRegistrarsRepository(int id)
        {
            var RegistrarsRepository = await _context.Registrars.FindAsync(id);
            if (RegistrarsRepository == null)
            {
                return NotFound();
            }

            _context.Registrars.Remove(RegistrarsRepository);
            await _context.SaveChangesAsync();

            return RegistrarsRepository;
        }

        private bool RegistrarsRepositoryExists(int id)
        {
            return _context.Registrars.Any(e => e.Id == id);
        }
    }
}
