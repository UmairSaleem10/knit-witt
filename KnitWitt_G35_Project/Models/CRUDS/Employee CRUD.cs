using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Metrics;

namespace KnitWitt_G35_Project.Models.CRUDS
{
    public class Employee_CRUD:Emp_Interface
    {
        private readonly string connectionString;
        PersonContext _personContext = null;

        public Employee_CRUD(IConfiguration config, PersonContext personContext)
        {
            connectionString = config.GetConnectionString("CRUDCS");
            _personContext = personContext;
        }

        public List<Person> SelectByID(int id)
        {
            var employees = _personContext.Person.FromSqlRaw($"SelectAllStudents {id}").ToList();
            return employees;
        }

        public void Insert(Person requestParams1)
        {
            var employees = _personContext.Person.FromSqlRaw($"Insert_Person {requestParams1.First_Name}, {requestParams1.Last_Name}, {requestParams1.Email}, {requestParams1.Contact}, {requestParams1.DOB}, {requestParams1.Gender}, {requestParams1.CNIC}");
            var persons = _personContext.Person.ToList();
        }

        public void Update(Person requestParams1)
        {
            var employees = _personContext.Person.FromSqlRaw($"Update_Person {requestParams1.First_Name}, {requestParams1.Last_Name}, {requestParams1.Email}, {requestParams1.Contact}, {requestParams1.DOB}, {requestParams1.Gender}, {requestParams1.CNIC}");
            var persons = _personContext.Person.ToList();
        }

        public void Delete(int id)
        {
            _personContext.Database.ExecuteSqlRaw($"Delete_Person {id}");
            var employees = _personContext.Person.ToList();
        }
   

    }
}




























//public async Task<int> Insert(Person person)
//{
//    using var connection = new SqlConnection(connectionString);

//    var query = "Insert Into Customers(First_Name, Last_Name, Email, Contact, DOB, Gender, CNIC) Values(@First_Name,@Last_Name, @Email, @Contact, @DOB, @Gender, @CNIC)";

//    using var command = new SqlCommand(query, connection);

//    command.Parameters.AddWithValue("@First_Name", person.First_Name);
//    command.Parameters.AddWithValue("@Last_Name", person.Last_Name);
//    command.Parameters.AddWithValue("@Email", person.Email);
//    command.Parameters.AddWithValue("@Contact", person.Contact);
//    command.Parameters.AddWithValue("@DOB", person.DOB);
//    command.Parameters.AddWithValue("@Gender", person.Gender);
//    command.Parameters.AddWithValue("@CNIC", person.CNIC);

//    try
//    {
//        await connection.OpenAsync();
//        var rowsAffected = await command.ExecuteNonQueryAsync();
//        await connection.CloseAsync();
//        return rowsAffected;
//    }
//    catch
//    {
//        if (connection.State != ConnectionState.Closed)
//        {
//            await connection.CloseAsync();
//        }
//        return -1;
//    }
//}

//public async Task<List<Person>> SelectAll()
//{
//    using var connection = new SqlConnection(connectionString);

//    var query = "SELECT Person_Id, First_Name, Last_Name, Email, Contact, DOB, Gender, CNIC FROM Person ORDER BY Person_Id";

//    using var command = new SqlCommand(query, connection);

//    try
//    {
//        await connection.OpenAsync();
//        using var reader = await command.ExecuteReaderAsync();
//        List<Person> items = null;
//        if (reader.HasRows)
//        {
//            items = new List<Person>();
//            while (await reader.ReadAsync())
//            {
//                var item = new Person();
//                items.Add(item);
//            }
//        }
//        await reader.CloseAsync();
//        await connection.CloseAsync();
//        return items;
//    }
//    catch
//    {
//        if (connection.State != ConnectionState.Closed)
//        {
//            await connection.CloseAsync();
//        }
//        return null;
//    }
//}


//{requestParams1.partment_Id}, {requestParams1.employee.Hire_Date}, {requestParams1.emp_role.Role_Id}, {requestParams1.emp_role.Start_Date}, {requestParams1.emp_role.End_Date}