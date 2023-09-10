using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetComputerSekho.Entities
{
    public class Course
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int course_id { get; set; }

        public string? course_name { get; set; }

        public string? course_description { get; set; }

        public int course_duration { get; set; }

        public String? course_syllabus { get; set; }

        public string? age_grp_type { get; set; }

        public bool course_is_active { get; set; }

        public string? cover_photo { get; set; }
    }
}