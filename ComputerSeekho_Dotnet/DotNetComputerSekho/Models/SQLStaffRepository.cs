using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace DotNetComputerSekho.Models
{
    public class SQLStaffRepository:IStaffRepository
    {
        private readonly AppDBcontext context;

        public SQLStaffRepository(AppDBcontext context)
        {
            this.context = context;
        }
        public async Task<ActionResult<Staff>> Add(Staff staff)
        {
            context.Staff.Add(staff);
            await context.SaveChangesAsync();
            return staff;
        }

        public async Task<Staff> Delete(int Id)
        {
            Staff staff = context.Staff.Find(Id);
            if (staff != null)
            {
                context.Staff.Remove(staff);
                await context.SaveChangesAsync();
            }
            return staff;
        }
        public async Task<ActionResult<IEnumerable<Staff>?>> GetAllStaff()
        {
            if (context.Staff == null)
            {
                return null;
            }
            return await context.Staff.ToListAsync();

        }

        public async Task<ActionResult<Staff>?> GetStaff(int Id)
        {
            if (context.Staff == null)
            {
                return null;
            }
            var staff = await context.Staff.FindAsync(Id);

            if (staff == null)
            {
                return null;
            }

            return staff;

        }

        public async Task<Staff?> Update(int id, Staff staff)
        {
            if (id != staff.staff_id)
            {
                return null;
            }

            context.Entry(staff).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffExists(id))
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

        async Task<IEnumerable<Staff>> IStaffRepository.GetByNamestaff(string Name)
        {
            return await context.Staff.Where(s => s.staff_username.Contains(Name)).ToListAsync();
        }

        private bool StaffExists(int id)
        {
            return (context.Staff?.Any(s => s.staff_id == id)).GetValueOrDefault();
        }


    }
}
