namespace KnitWitt_G35_Project.Models
{
    public class Salary_Details
    {
        public int Employee_Id { get; set; }
        public int Hourly_Wage { get; set; }
        public int Hours_Worked { get; set; }
        public string? Job_Title { get; set; }
        public int Overtime_Pay { get; set; }
        public DateTime Payment_Date { get; set; }
        public int Total_Pay { get; set; }
    }
}
