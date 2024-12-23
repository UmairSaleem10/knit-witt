namespace KnitWitt_G35_Project.Models
{
    public class RawMaterial
    {
        [Key]
        public int Id { get; set; }
        public int Process_Id { get; set; }
        public int Supplier_Id { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public int Material_Type { get; set; }
    }
}
