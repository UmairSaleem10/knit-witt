namespace KnitWitt_G35_Project.Models
{
    public class Courier_Service
    {
        [Key]
        public int Transport_Id { get; set; }
        public string? Transport_Name { get; set; }
        public string? Transport_Company { get; set; }
        public DateTime Transport_Date { get; set; }
        public string? From_Location { get; set; }
        public string? To_Location { get; set; }
        public int Total_Quantity { get; set; }
        public int Total_Cost { get; set; }
        public int Product_Id { get; set; }
    }
}
