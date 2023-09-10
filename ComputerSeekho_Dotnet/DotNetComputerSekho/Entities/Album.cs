using Microsoft.CodeAnalysis.Options;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DotNetComputerSekho.Entities
{
    public class Album
    {
        [Key]
        public int album_id { get; set; }
        public string? album_name { get; set; }
        public string? album_description { get; set; }
        public bool album_is_active { get; set; }
        public DateOnly start_date { get; set; }
        public DateOnly end_date { get; set; }
        public Image images { get; set; }
    }
}
