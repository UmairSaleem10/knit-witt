namespace KnitWitt_G35_Project.Models
{

    public class Machinery_Mantainence : Machine
    {
        public int Mantainence_Id { get; set; }
        public string? Mantainence_Description { get; set; }
        public int Mantainence_Cost { get; set; }
        public DateOnly Mantainence_Date { get; set; }
    }
}
