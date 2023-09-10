
using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Controllers
{
    [Route("api/courses")]
    [EnableCors]
    [ApiController]
    public class CourseController : ControllerBase
    {

        private readonly ICourseRepository _repository;

        public CourseController(ICourseRepository repository)
        {
            _repository = repository;
        }


        //Get All
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Course>?>> GetCourses()
        {
            if (await _repository.GetAllCourses() == null)
            {
                return NotFound();
            }

            return await _repository.GetAllCourses();
        }


        //ByID
        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetById_ActionResultOfT(int id)
        {
            var Course = await _repository.GetCourse(id);
            return Course == null ? NotFound() : Course;
        }



        // PUT: api/Courses/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourse(int id, Course Course)
        {
            if (id != Course.course_id)
            {
                return BadRequest();
            }
            try
            {
                await _repository.Update(id, Course);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (_repository.GetCourse(id) == null)
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

        // POST: api/Courses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Course>> PostCourse(Course Course)
        {
            await _repository.Add(Course);
            return CreatedAtAction("PostCourse", new { id = Course.course_id }, Course);
        }
        // DELETE: api/Courses/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            if (_repository.GetAllCourses() == null)
            {
                return NotFound();
            }
            var Course = _repository.Delete(id);
            if (Course == null)
            {
                return NotFound();
            }
            await _repository.Delete(Course.Id);
            return NoContent();
        }


    }
}
