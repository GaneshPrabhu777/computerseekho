namespace DotNetComputerSekho.Models
{
    using DotNetComputerSekho.Entities;
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    

    public class Batch
    {
        [Key] // This marks batch_id as the primary key
       
        public int batch_id { get; set; }

       
        public string ? batch_name { get; set; }

       
        public DateTime? batch_start_time { get; set; }

        public DateTime? batch_end_time { get; set; }

        public DateTime? final_presentation_date { get; set; }

        public decimal? batch_fees { get; set; }

        //[Column("course_id")] // This maps to the course_id column in the database
        //[ForeignKey("CourseId")] // Specifies the foreign key relationship
        public int course_id { get; set; }

        //public Course? Course { get; set; }

    
       // public ICollection<Student> ? Students { get; set; }


        //public override string ToString()
        //{
        //    return $"BatchModel [BatchId={batch_id}, BatchName={batch_name}, BatchStartTime={BatchStartTime}, " +
        //           $"BatchEndTime={BatchEndTime}, FinalPresentationDate={FinalPresentationDate}, " +
        //           $"BatchFees={BatchFees}, ...]";
        //}
    }


}
