using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetComputerSekho.Entities
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int payment_id { get; set; }

        public string payment_transaction_id { get; set; }

        public DateTime payment_date { get; set; }

        public bool payment_done { get; set; }

        public double batch_fees { get; set; }

        public double fees_paid { get; set; }

        public string payment_mode { get; set; }

        public int student_id { get; set; }

        public double remaining_fees { get; set; }
    }
}
