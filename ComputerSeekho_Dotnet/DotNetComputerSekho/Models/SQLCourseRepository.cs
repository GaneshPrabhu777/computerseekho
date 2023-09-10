
using DotNetComputerSekho.Entities;
using DotNetComputerSekho.Model;
using DotNetComputerSekho.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho.Model
{
    public class SQLCourseRepository : ICourseRepository
    {
        private readonly AppDBcontext context;

        public SQLCourseRepository(AppDBcontext context)
        {
            this.context = context;
        }


        //Add
        async Task<ActionResult<Course>> ICourseRepository.Add(Course course)
        {
            context.Course.Add(course);
            await context.SaveChangesAsync();
            return course;
        }

        //Delete
        async Task<Course> ICourseRepository.Delete(int Id)
        {
            Course course = context.Course.Find(Id);
            if (course != null)
            {
                context.Course.Remove(course);
                await context.SaveChangesAsync();
            }
            return course;
        }


        //All
        public async Task<ActionResult<IEnumerable<Course>>> GetAllCourses()
        {
            if (context.Course == null)
            {
                return null;
            }
            return await context.Course.ToListAsync();
        }

        //By Id
        async Task<ActionResult<Course>?> ICourseRepository.GetCourse(int Id)
        {
            if (context.Course == null)
            {
                return null;
            }
            var course = await context.Course.FindAsync(Id);

            if (course == null)
            {
                return null;
            }

            return course;
        }

        Task<Course> ICourseRepository.Update(int id, Course courseChanges)
        {
            throw new NotImplementedException();
        }
    }
}
