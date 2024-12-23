namespace KnitWitt_G35_Project.Models
{
    public class Order_Details
    {
        public int Id { get; set; }
        public int Customer_Id { get; set; }
        public int Product_Type { get; set; }
        public int Quantity { get; set; }
        public int price { get; set; }
        public DateTime Order_Date { get; set; }
    }
}
