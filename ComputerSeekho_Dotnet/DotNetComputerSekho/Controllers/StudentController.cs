using DotNetComputerSekho.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentRepository _repository;
        public StudentController(IStudentRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>?>> GetStudent()
        {
            if (await _repository.GetAllStudent() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllStudent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetById_ActionResultOfT(int id)
        {
            var student = await _repository.GetStudent(id);
            return student == null ? NotFound() : student;
        }

        // PUT: api/Employees/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Student student)
        {
            if (id != student.student_id)
            {
                return BadRequest();
            }


            try
            {
                await _repository.Update(id, student);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetStudent(id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Employees
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("addStudent")]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {

            await _repository.Add(student);


            return CreatedAtAction("PostStudent", new { id = student.student_id }, student);
        }



        // DELETE: api/Employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            if (_repository.GetAllStudent() == null)
            {
                return NotFound();
            }
            var student = _repository.Delete(id);
            if (student == null)
            {
                return NotFound();
            }

            await _repository.Delete(student.Id);


            return NoContent();
        }

        // GET: api/getbyenquiry_id/{enquiry_id}
        [HttpGet("api/getbyenquiry_id/{enquiry_id}")]
        public ActionResult<List<Student>> GetStudentsByEnquiryId(int enquiry_id)
        {
            var students = _repository.GetStudentsByEnquiryId(enquiry_id);
            if (students == null || students.Count == 0)
            {
                return NotFound();
            }

            return students;
        }

    }
}