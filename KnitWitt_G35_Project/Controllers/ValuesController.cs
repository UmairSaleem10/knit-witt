//using KnitWitt_G35_Project.Models;
//using KnitWitt_G35_Project.Services;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace KnitWitt_G35_Project.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ValuesController : ControllerBase
//    {
//        IEmployeeService _employeeServices = null;

//        public ValuesController(IEmployeeService studentServices)
//        {
//            _employeeServices = studentServices;
//        }

//        [HttpGet]
//        public List<Person> Getstudents(int id)
//        {
//            return _employeeServices.GetPerson(id);
//        }
//        [HttpPost]

//        public void Insert(RequestParams1 requestParams1)
//        {
//            _employeeServices.Insert(requestParams1);
//        }
//        [HttpPut("{id}")]
//        public void Update(RequestParams1 requestParams1)
//        {
//            _employeeServices.Update(requestParams1);
//        }
//        [HttpDelete("{id}")]
//        public void Delete(int id)
//        {
//            _employeeServices.Delete(id);
//        }

//    }
//}
