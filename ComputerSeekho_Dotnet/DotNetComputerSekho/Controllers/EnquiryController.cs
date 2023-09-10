using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class EnquiryController : ControllerBase
    {
        private readonly IEnquiryRepository repository;
        public EnquiryController(IEnquiryRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet("getenquiry")]
        public async Task<ActionResult<IEnumerable<Enquiry>?>> GetEnquiry()
        {
            if (await repository.GetAllEnquiry() == null)
            {
                return NotFound();
            }
            return await repository.GetAllEnquiry();
        }
        [HttpGet("GetByIdEnquiry/{id}")]
        public async Task<ActionResult<Enquiry>> GetByIdEnquiry(int id)
        {
            var enquiry = await repository.GetEnquiry(id);
            return enquiry==null? NotFound() : enquiry;
        }
        [HttpPut("PutEnquiry/{id}")]
        public async Task<IActionResult>PutEnquiry(int id,Enquiry enquiry)
        {
            if(id!=enquiry.enquiry_id)
            {
                return BadRequest();
            }
            try
            {
                await repository.Update(id, enquiry);
            }
            catch(DbUpdateConcurrencyException)
            {
                if(repository.GetEnquiry(id)==null)
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
        [HttpPost("new_enquiry")]
        public async Task<ActionResult<Enquiry>>PostEnquiry(Enquiry enquiry)
        {
            await repository.AddEnquiry(enquiry);
            return CreatedAtAction("PostEnquiry", new { id = enquiry.enquiry_id }, enquiry);
        }
        [HttpDelete("DeleteEnquiry/{id}")]
        public async Task<IActionResult>DeleteEnquiry(int id)
        {
            if(repository.GetAllEnquiry()==null)
            {
                return NotFound();
            }
            var enquiry =repository.Delete(id);
            if(enquiry==null)
            {
                return NotFound() ; 
            }
            await repository.Delete(enquiry.Id);

            return NoContent();
        }
    }
}
