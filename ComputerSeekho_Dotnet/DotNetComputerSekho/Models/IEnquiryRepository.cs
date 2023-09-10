using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Models
{
    public interface IEnquiryRepository
    {
        Task<ActionResult<Enquiry>?> GetEnquiry(int id);
        Task<ActionResult<IEnumerable<Enquiry>>> GetAllEnquiry();
        Task<ActionResult<Enquiry>> AddEnquiry(Enquiry enquiry);
        Task<Enquiry>Update(int id, Enquiry enquiry);
        Task<Enquiry> Delete(int id);

    }
}
