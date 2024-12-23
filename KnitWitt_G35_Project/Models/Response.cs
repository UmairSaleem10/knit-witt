namespace KnitWitt_G35_Project.Models
{
    public class Response
    {
        public int StatusCode { get; set; }
        public string StatusMessage { get; set; }
        public List<Person> listPersons { get; set; }
        public Person person { get; set; }
        public List<Courier_Service> listCouriers { get; set; }
        public Courier_Service couriers { get; set; }

    }
}
