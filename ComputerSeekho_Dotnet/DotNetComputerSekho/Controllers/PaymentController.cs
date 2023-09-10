using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IPaymentRepository _paymentRepository;

        public PaymentController(IPaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        // GET: api/Payment
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> GetAllPayments()
        {
            IEnumerable<Payment> payments = await _paymentRepository.GetAllAsync();
            return Ok(payments);
        }

        // GET: api/Payment/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPaymentById(int id)
        {
            Payment payment = await _paymentRepository.GetByIdAsync(id);
            if (payment == null)
            {
                return NotFound();
            }
            return Ok(payment);
        }

        // POST: api/Payment
        [HttpPost]
        public async Task<IActionResult> CreatePayment(Payment payment)
        {
            if (ModelState.IsValid)
            {
                await _paymentRepository.AddAsync(payment);
                return CreatedAtAction(nameof(GetPaymentById), new { id = payment.payment_id }, payment);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Payment/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePayment(int id, Payment payment)
        {
            if (id != payment.payment_id)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                await _paymentRepository.UpdateAsync(payment);
                return NoContent();
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/Payment/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayment(int id)
        {
            await _paymentRepository.DeleteAsync(id);
            return NoContent();
        }

        // GetByStudentIdAsync/2
        [HttpGet("GetByStudentIdAsync/{studentid}")]
        public async Task<ActionResult<IEnumerable<Payment>>> GetByStudentIdAsync(int studentid)
        {
            var payments = await _paymentRepository.GetByStudentIdAsync(studentid);
            return Ok(payments);
        }



    }
}
