namespace KnitWitt_G35_Project.Models
{
    interface Process_interface
    {
        public int Process_Id { get; set; }
    }
    public class Production_Process : Process_interface
    {
        public int Process_Id { get; set; }
        public string? Process_Type { get; set; }
        public int Duration { get; set; }
        public int cost { get; set; }
    }
}

