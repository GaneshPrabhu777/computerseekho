using Microsoft.AspNetCore.Mvc;

namespace DotNetComputerSekho.Models
{
    public interface IStudentRepository
    {
        Task<ActionResult<Student>?> GetStudent(int Id);
        Task<ActionResult<IEnumerable<Student>>> GetAllStudent();
        Task<ActionResult<Student>> Add(Student student);
        Task<Student> Update(int id, Student student);
        Task<Student> Delete(int Id);
        List<Student> GetStudentsByEnquiryId(int enquiry_id);
    }
}