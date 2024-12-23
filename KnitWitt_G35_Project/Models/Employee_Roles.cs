namespace KnitWitt_G35_Project.Models
{
    public class Employee_Roles:Employees_interface, Roles_interface
    {
        [Key]
        public int Employee_Id { get; set; }
        public int Role_Id { get; set; }
        public DateTime Start_Date { get; set; }
        public DateTime End_Date { get; set; }
    }
}
