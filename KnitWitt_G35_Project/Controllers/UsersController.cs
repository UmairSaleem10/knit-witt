using KnitWitt_G35_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace KnitWitt_G35_Project.Controllers
{
    //[Route("api/[controller]")]
    //[ApiController]
    //public class UsersController : ControllerBase
    //{
    //    private readonly IConfiguration _configuration;

    //    public UsersController(IConfiguration configuration)
    //    {
    //        _configuration = configuration;
    //    }

    //    [HttpPost]
    //    [Route("registration")]
    //    public Response register(Person person, Admin admin)
    //    {
    //        Response response = new Response();
    //        Data_Access_Layer__DAL_ dal = new Data_Access_Layer__DAL_();
    //        SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("KnitWitt").ToString());
    //        response = dal.register(admin, person, connection);
    //        return response;
    //    }

    //    [HttpPost]
    //    [Route("login")]
    //    public Response Login(Admin admin, Person person)
    //    {
    //        Data_Access_Layer__DAL_ dal = new Data_Access_Layer__DAL_();
    //        SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("").ToString());
    //        Response response = new Response();
    //        response = dal.login(person, connection, admin);
    //        return response;
    //    }
    //}
}
