using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Models
{
    public interface IStaffRepository
    {
        Task<ActionResult<Staff>?> GetStaff(int Id);
        // public Task<ActionResult<IEnumerable<Staff>?>> GetAllStaff();

        public Task<ActionResult<IEnumerable<Staff>?>> GetAllStaff();
        public Task<ActionResult<Staff>> Add(Staff staff);
        public Task<Staff?> Update(int id, Staff staffChanges);
        public Task<Staff> Delete(int Id);
        public Task<IEnumerable< Staff>> GetByNamestaff(String Name);

    }
}
