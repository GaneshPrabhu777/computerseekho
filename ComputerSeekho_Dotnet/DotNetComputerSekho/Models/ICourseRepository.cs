
using DotNetComputerSekho.Entities;
using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Model
{
    public interface ICourseRepository
    {
        Task<ActionResult<Course>?> GetCourse(int Id);
        Task<ActionResult<IEnumerable<Course>>> GetAllCourses();
        Task<ActionResult<Course>> Add(Course course);
        Task<Course> Update(int id, Course courseChanges);
        Task<Course> Delete(int Id);
    }
}
