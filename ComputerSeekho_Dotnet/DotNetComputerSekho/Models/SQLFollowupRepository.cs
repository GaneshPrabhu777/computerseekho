using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Models
{
    public class SQLFollowupRepository : IFollowupRepository
    {
        private readonly AppDBcontext context;

        public SQLFollowupRepository(AppDBcontext context)
        {
            this.context = context;            
        }
        public async Task<ActionResult<Followup>?> CreateFollowup(Followup followup)
        {
            context.Followup.Add(followup);
            await context.SaveChangesAsync();
            return followup;
        }

        public async Task<ActionResult<IEnumerable<Followup>>> GetallFollowup()
        {
            if(context.Followup==null)
            {
                return null;
            }
            return await context.Followup.ToListAsync();    
        }

        public async Task<ActionResult<Followup>?> GetFollowupById(int id)
        {
            if(context.Followup==null)
            {
                return null;
            }
            var followup=await context.Followup.FindAsync(id);
            if(followup==null)
            {
                return null;
            }
            return followup;
        }

        
    }
}
