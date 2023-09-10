using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetComputerSekho.Entities
{
    public class Placement
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int placemetid { get; set; }
        public string? coursename { get; set; }
        public int batchid { get; set; }
        public int total_student { get; set; }
        public int placedstudents { get; set; }

    }
}
