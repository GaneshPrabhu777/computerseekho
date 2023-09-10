using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetComputerSekho.Entities
{
    public class Enquiry
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int enquiry_id { get; set; }
        public string? enquirer_name { get; set; }
        //public string? enquirer_address { get; set; }
        public string? enquirer_mobile { get; set; }
        //public string? enquirer_alternate_mobile { get; set; }
        public string? enquirer_email_id { get; set; }
        public DateTime enquiry_date { get; set; }
        public DateTime Follow_up_date { get; set; }
        public string? closure_reason { get; set; }
        public string? followup_msg { get; set; }
        public string? enquirer_query { get; set; }
        public bool? enquiry_processed_flag { get; set; }
        //public string? Student_Name { get; set; }
        public int staff_id { get; set; }

    }
}
