namespace KnitWitt_G35_Project.Models
{
    public abstract class Warehouse
    {
        public int Warehouse_Id { get; set; }
        private int Manager_Id { get; set; }
        private string? Warehouse_Name { get; set; }
        private string? Warehouse_Description { get; set; }
    }
}
