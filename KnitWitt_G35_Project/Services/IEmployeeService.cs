using KnitWitt_G35_Project.Models;

namespace KnitWitt_G35_Project.Services
{
    public interface IEmployeeService
    {
        List<Person> GetPerson(int id);
        void Insert(Person requestParams1);
        void Update(Person requestParams1);
        void Delete(int id);
    }
}
