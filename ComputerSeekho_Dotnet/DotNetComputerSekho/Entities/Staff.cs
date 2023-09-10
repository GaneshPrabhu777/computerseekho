using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetComputerSekho.Entities
{
    public class Staff
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int staff_id { get; set; }
        public string? staff_name { get; set; }
        public string? photo_url { get; set; }
        public string? staff_mobile { get; set; }
        public string? staff_email { get; set; }
        public string? staff_username { get; set; }
        public string? staff_password { get; set; }
        public string? staff_role { get; set; }
        public bool staff_isactive { get; set; }

        // Navigation property for many-to-many relationship
        //public ICollection<Followup> Followup { get; set; }
    }
}
