using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotNetComputerSekho.Repositories
{
    public class SQLPaymentRepository : IPaymentRepository
    {
        private readonly AppDBcontext _context;

        public SQLPaymentRepository(AppDBcontext context)
        {
            _context = context;
        }

        public async Task<Payment> GetByIdAsync(int payment_id)
        {
            return await _context.Payment.FindAsync(payment_id);
        }

        public async Task<IEnumerable<Payment>> GetAllAsync()
        {
            return await _context.Payment.ToListAsync();
        }

        public async Task<IEnumerable<Payment>> GetByStudentIdAsync(int studentid)
        {
            return await _context.Payment.Where(payment => payment.student_id == studentid).ToListAsync();
        }

        public async Task AddAsync(Payment payment)
        {
            _context.Payment.Add(payment);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Payment payment)
        {
            _context.Entry(payment).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int payment_id)
        {
            var payment = await _context.Payment.FindAsync(payment_id);
            if (payment != null)
            {
                _context.Payment.Remove(payment);
                await _context.SaveChangesAsync();
            }
        }
    }
}
