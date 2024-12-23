namespace KnitWitt_G35_Project.Models
{
    public class Inventory:Warehouse
    {
        public int Id { get; set; }
        public int Item_Typw { get; set; }
        public string? Location { get; set; }
        public int Quantity { get; set; }
        public int Reorder_Point { get; set; }
        public int Unit_Cost { get; set; }
        public DateOnly Restock_Date { get; set; }
        
    }
}
