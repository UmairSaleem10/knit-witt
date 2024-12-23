//using KnitWitt_G35_Project.Models;
//using Microsoft.AspNetCore.Mvc;
//using KnitWitt_G35_Project.Services;
//using System;
//using KnitWitt_G35_Project.Models.CRUDS;
//using Microsoft.EntityFrameworkCore;

//namespace KnitWitt_G35_Project.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class PersonController : Controller
//    {
//        IEmployeeService _employeeServices = null;
//        Employee_CRUD emp_crud;
//        PersonContext personContext;

//        public PersonController(Employee_CRUD _emp_crud)
//        {
//            emp_crud = _emp_crud;
//        }

//        [HttpGet]
//        public List<RequestParams1> Getstudents(int id)
//        public List<Task<ActionResult<RequestParams1>>> Getstudents(int id)
//        {
//            if (personContext.Person == null)
//            {
//                throw new Exception();
//            }
//            var employees = personContext.Person.FromSqlRaw($"SelectAllStudents {id}");
//            var person = employees.ToList();
//            return person;
//            var emp = emp_crud.SelectByID(id).ToList();
//            return emp;
//        }

//        [HttpPut("{id}")]
//        public void Update(RequestParams1 requestParams1)
//        {
//            emp_crud.Update(requestParams1);
//        }
//        [HttpPost()]
//        public void Insert(RequestParams1 requestParams1)
//        {
//            emp_crud.Insert(requestParams1);

//        }


//        [HttpDelete("{id}")]
//        public void Delete(int id)
//        {
//            emp_crud.Delete(id);
//        }


//    }
//}
