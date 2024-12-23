using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace KnitWitt_G35_Project.Models
{
    interface Person_interface
    {
        public int Person_Id { get; set; }
    }
    public record Person
    {
        [Key]
        public int Person_Id { get; set; }
        public string? First_Name { get; set; }
        public string? Last_Name { get; set; }
        public string? Email { get; set; }
        public string? Contact { get; set; }
        public DateTime DOB { get; set; }
        public bool Gender { get; set; }
        public string? CNIC { get; set; }
    }
}
