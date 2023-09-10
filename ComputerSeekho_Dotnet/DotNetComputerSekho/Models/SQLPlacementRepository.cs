using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Experimental.ProjectCache;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Models
{
    public class SQLPlacementRepository : IPlacementRepository
    {
        private readonly AppDBcontext context;

        public SQLPlacementRepository(AppDBcontext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<Placement>> Addplacement(Placement placement)
        {
            context.Placement.Add(placement);
            await context.SaveChangesAsync();
            return placement;
        }

        public async Task<ActionResult<IEnumerable<Placement>>> GetAllPlacements()
        {
            if(context.Followup==null)
            {
                return null;
            }
            return await context.Placement.ToListAsync();
        }

        public async Task<ActionResult<Placement>?> GetPlacment(int id)
        {
            if(context.Followup==null)
            {
                return null;
            }
            var placement = await context.Placement.FindAsync(id);
            if(placement == null)
            { 
                return null; 
            }
            return placement;
        }

        public async Task<Placement> updatePlacement(Placement placement, int id)
        {
           if(id!=placement.placemetid)
            {
                return null;
            }
           context.Entry(placement).State = EntityState.Modified;
            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlacementExists(id))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }
            return null;
        }
        private bool PlacementExists(int id)
        {
            return (context.Placement?.Any(s => s.placemetid == id)).GetValueOrDefault();
        }
    }
}
