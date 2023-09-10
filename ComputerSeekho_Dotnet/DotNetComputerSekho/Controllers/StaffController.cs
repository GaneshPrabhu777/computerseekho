using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

namespace DotNetComputerSekho.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class StaffController:ControllerBase
    {
        private readonly IStaffRepository repository;

        public StaffController(IStaffRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet("GetStaff")]
        public async Task<ActionResult<IEnumerable<Staff>?>> GetStaff()
        {
            var staffList = await repository.GetAllStaff();
            if (staffList == null)
            {
                return NotFound();
            }

            return staffList;
        }
        [HttpGet("GetByIdStaff/{id}")]
        public async Task<ActionResult<Staff>> GetStaffById(int id)
        {
            var staff = await repository.GetStaff(id);
            return staff == null ? NotFound() : staff;
        }

        [HttpPut("PutStaff/{id}")]
        public async Task<IActionResult> PutStaff(int id, Staff staff)
        {
            if (id != staff.staff_id)
            {
                return BadRequest();
            }

            var updatedStaff = await repository.Update(id, staff);

            if (updatedStaff == null)
            {
                return NotFound();
            }

            return NoContent();
        }
        [HttpGet("GetStaffByName/{name}")]
        public async Task<ActionResult<IEnumerable<Staff>>> GetStaffByName(string name)
        {
            var staffList = await repository.GetByNamestaff(name);
            //if (staffList == null || staffList.Count() == 0)
            //{
            //    return NotFound();
            //}

            return staffList.ToList();
        }

        [HttpPost("PostStaff")]
        public async Task<ActionResult<Staff>> PostStaff(Staff staff)
        {
            await repository.Add(staff);
            return CreatedAtAction(nameof(GetStaffById), new { id = staff.staff_id }, staff);
        }

        [HttpDelete("deleteStaff/{id}")]
        public async Task<IActionResult> DeleteStaff(int id)
        {
            var staffToDelete = await repository.Delete(id);

            if (staffToDelete == null)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}
