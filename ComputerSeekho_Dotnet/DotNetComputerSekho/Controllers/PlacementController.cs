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
    public class PlacementController:ControllerBase
    {
        private readonly IPlacementRepository repository;

        public PlacementController(IPlacementRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Placement>?>>GetallPlacement()
        {
            if(await repository.GetAllPlacements()==null)
            {
                return NotFound();
            }
            return await repository.GetAllPlacements();
        }
        [HttpGet("GetByIdplacement/{id}")]
        public async Task<ActionResult<Placement>>GetByIdPlacement(int id)
        {
            var placement=await repository.GetPlacment(id);
            return placement == null ? NotFound() : placement;
        }
        [HttpPut("PutPlacement/{id}")]
        public async Task<IActionResult>PutPlacement(int id,Placement placement)
        {
            if(id!=placement.placemetid)
            {
                return BadRequest();
            }
            try
            {
                await repository.updatePlacement(placement,id);
            }
            catch(DbUpdateConcurrencyException)
            {
                if(repository.GetPlacment(id)==null)
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
        [HttpPost("postPlacement")]
        public async Task<ActionResult<Placement>>Postplacement(Placement placement)
        {
            await repository.Addplacement(placement);
            return CreatedAtAction("postplacment",new {id=placement.placemetid},placement);
        }

    }
}
