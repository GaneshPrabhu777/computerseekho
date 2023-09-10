using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Models
{
    public class SQLEnquiryRepository : IEnquiryRepository
    {
        private readonly AppDBcontext context;
        public SQLEnquiryRepository(AppDBcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Enquiry>> AddEnquiry(Enquiry enquiry)
        {
            context.Enquiry.Add(enquiry);
            await context.SaveChangesAsync();
            return enquiry;
        }

        public async Task<Enquiry> Delete(int id)
        {
            Enquiry enquiry = context.Enquiry.Find(id);
            if (enquiry != null)
            {
                context.Enquiry.Remove(enquiry);
                await context.SaveChangesAsync();
            }
            return enquiry;
        }

        public async Task<ActionResult<IEnumerable<Enquiry>>> GetAllEnquiry()
        {
            if (context.Enquiry == null)
            {
                return null;
            }
            return await context.Enquiry.ToListAsync();
        }

        public async Task<ActionResult<Enquiry>?> GetEnquiry(int id)
        {
            if (context.Enquiry == null)
            {
                return null;
            }
            var enquiry = await context.Enquiry.FindAsync(id);
            if (enquiry == null)
            {
                return null;
            }
            return enquiry;
        }

        public async Task<Enquiry> Update(int id, Enquiry enquiry)
        {
            if (id != enquiry.enquiry_id)
            {
                return null;
            }
            context.Entry(enquiry).State = EntityState.Modified;
            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EnquiryExists(id))
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

        private bool EnquiryExists(int id)
        {
            return (context.Enquiry?.Any(e => e.enquiry_id == id)).GetValueOrDefault();
        }
    }
}
