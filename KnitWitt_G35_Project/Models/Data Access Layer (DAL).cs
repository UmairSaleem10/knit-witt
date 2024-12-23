using Microsoft.Data.SqlClient;
using System.Data;

namespace KnitWitt_G35_Project.Models
{
    public class Data_Access_Layer__DAL_
    {
        public Response register(Admin admin, Person person, SqlConnection connection)
        {
            Response response = new Response();
            SqlCommand cmd = new SqlCommand("sp_register", connection);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@First_Name", person.First_Name);
            cmd.Parameters.AddWithValue("@Last_Name", person.Last_Name);
            cmd.Parameters.AddWithValue("@Email", person.Email);
            cmd.Parameters.AddWithValue("@CNIC", person.CNIC);
            cmd.Parameters.AddWithValue("@DOB", person.DOB);
            cmd.Parameters.AddWithValue("@Gender", person.Gender);
            cmd.Parameters.AddWithValue("@Contact", person.Contact);
            cmd.Parameters.AddWithValue("@Password", admin.Password);
            connection.Open();
            int i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                response.StatusCode = 200;
                response.StatusMessage = "User registered successfully!";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User registion failed!";
            }

            return response;
        }

        public Response login(Person person, SqlConnection connection, Admin admin)
        {
            SqlDataAdapter da = new SqlDataAdapter("sp_login", connection);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@Email", person.Email);
            da.SelectCommand.Parameters.AddWithValue("Password", admin.Password);
            DataTable dt = new DataTable();
            da.Fill(dt);
            Response response=new Response();
            if (dt.Rows.Count > 0)
            {
                person.Person_Id = Convert.ToInt32(dt.Rows[0]["Person_Id"]);
                person.First_Name = Convert.ToString(dt.Rows[0]["First_Name"]);
                person.Last_Name = Convert.ToString(dt.Rows[0]["Last_Name"]);
                person.Email = Convert.ToString(dt.Rows[0]["Email"]);
                person.Contact = Convert.ToString(dt.Rows[0]["Contact"]);
                person.DOB = Convert.ToDateTime(dt.Rows[0]["DOB"]);
                person.Gender = Convert.ToBoolean(dt.Rows[0]["Gender"]);
                person.CNIC = Convert.ToString(dt.Rows[0]["CNIC"]);
                response.StatusCode = 200;
                response.StatusMessage = "User is valid";
            }
            else
            {
                response.StatusCode = 100;
                response.StatusMessage = "User is invalid";
            }
            return response;
        }
    }
}
