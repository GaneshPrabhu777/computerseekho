namespace DotNetComputerSekho.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int student_id { get; set; }
        public string? student_name { get; set; }
        public string? student_address { get; set; }
        public string? student_gender { get; set; }
        public DateTime? student_dob { get; set; }
        public string? student_qualification { get; set; }
        public string? student_mobile { get; set; }

        public int? batch_id { get; set; }
        public int? course_id { get; set; }
        public int? enquiry_id { get; set; }
        public Student() { }
    }



}