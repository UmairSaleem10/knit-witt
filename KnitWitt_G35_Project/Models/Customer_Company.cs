namespace KnitWitt_G35_Project.Models
{
    public class Customer_Company
    {
        [Key]
        public int Customer_Id { get; set; }
        public string? Company_Name { get; set; }
        public string? Contact { get; set; }
    }
}
