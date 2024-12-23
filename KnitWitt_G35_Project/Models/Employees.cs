namespace KnitWitt_G35_Project.Models
{
    interface Employees_interface
    {
        public int Employee_Id { get; set; }
    }
    public class Employees : Department, Employees_interface
    {
        [Key]
        public int Employee_Id { get; set; }
        public DateTime Hire_Date { get; set; }
        public int Department_Id { get; set; }

    }
}
