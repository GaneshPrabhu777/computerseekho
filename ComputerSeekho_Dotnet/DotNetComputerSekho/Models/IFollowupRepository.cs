using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Models
{
    public interface IFollowupRepository
    {
        Task<ActionResult<Followup>?> GetFollowupById(int id);
        Task<ActionResult<Followup>?> CreateFollowup(Followup followup);
        Task<ActionResult<IEnumerable<Followup>?>> GetallFollowup();
    }
}
