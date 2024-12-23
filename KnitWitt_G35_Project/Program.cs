
using KnitWitt_G35_Project.Controllers;
using KnitWitt_G35_Project.Models;
using KnitWitt_G35_Project.Models.CRUDS;
using KnitWitt_G35_Project.Services;
using Microsoft.EntityFrameworkCore;


namespace KnitWitt_G35_Project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddDbContext<PersonContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDCS")));

            builder.Services.AddDbContext<Raw_Material_Context>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDCS")));

            builder.Services.AddDbContext<Courier_Service_Context>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDCS")));

            builder.Services.AddDbContext<Customer_Company_Context>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDCS")));

            builder.Services.AddDbContext<DepartmentContext>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDCS")));

            builder.Services.AddScoped<Emp_Interface, Employee_CRUD>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddCors();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            
            app.UseCors(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}