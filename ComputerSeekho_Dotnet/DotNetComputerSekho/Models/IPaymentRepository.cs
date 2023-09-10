using DotNetComputerSekho.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DotNetComputerSekho.Repositories
{
    public interface IPaymentRepository
    {
        Task<Payment> GetByIdAsync(int payment_id);
        Task<IEnumerable<Payment>> GetAllAsync();
        Task<IEnumerable<Payment>> GetByStudentIdAsync(int student_id);
        Task AddAsync(Payment payment);
        Task UpdateAsync(Payment payment);
        Task DeleteAsync(int payment_id);
    }
}
