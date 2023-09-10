using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetComputerSekho.Entities
{
    public class Followup
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int followup_id { get; set; }
        public int enquiry_id { get; set; }
        public int staff_id { get; set; }
        public string? followup_msg { get; set; }

    }
}
