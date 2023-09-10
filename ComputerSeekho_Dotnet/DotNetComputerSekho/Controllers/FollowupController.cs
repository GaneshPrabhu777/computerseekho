using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class FollowupController:ControllerBase
    {
        private readonly IFollowupRepository repository;
        public FollowupController(IFollowupRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet("getenquiry")]
        public async Task<ActionResult<IEnumerable<Followup>?>> GetFollowup()
        {
            if(await repository.GetallFollowup()==null)
            {
                return NotFound();
            }
            return await repository.GetallFollowup();
        }
        [HttpGet("GetByIdFollowup/{id}")]
        public async Task<ActionResult<Followup>>GetByIdFollowup(int id)
        {
            var followup = await repository.GetFollowupById(id);
            return followup == null ? NotFound(): followup;
        }
        [HttpPost("PostFollowup")]
        public async Task<ActionResult<Followup>>PostFollowup(Followup followup)
        {
            await repository.CreateFollowup(followup);
            return CreatedAtAction("PostFollowup", new {id=followup.followup_id},followup);
        }
    }
}
