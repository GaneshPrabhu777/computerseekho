using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Models
{
    public interface IPlacementRepository
    {
        Task<ActionResult<Placement>?> GetPlacment(int id);
        Task<ActionResult<IEnumerable<Placement>>> GetAllPlacements();
        Task<Placement>updatePlacement(Placement placement,int id);
        Task<ActionResult<Placement>>Addplacement(Placement placement);
    }
}
