
using DotNetComputerSekho.Model;
using DotNetComputerSekho.Models;
using DotNetComputerSekho.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DotNetComputerSekho
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("MyAllowSpecificOrigins",
                    builder =>
                    {
                        builder.WithOrigins("*")
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });
            builder.Services.AddTransient<IEnquiryRepository,SQLEnquiryRepository>();
            builder.Services.AddTransient<IFollowupRepository,SQLFollowupRepository>();
            builder.Services.AddTransient<IStaffRepository,SQLStaffRepository>();
            builder.Services.AddTransient<IPlacementRepository,SQLPlacementRepository>();
            builder.Services.AddTransient<ICourseRepository,SQLCourseRepository>();
            builder.Services.AddTransient<IStudentRepository, SQLStudentRepository>();
            builder.Services.AddTransient<IBatchRepository, SQLBatchRepository>();
            builder.Services.AddTransient<IPaymentRepository, SQLPaymentRepository>();
            builder.Services.AddDbContext<AppDBcontext>(option=>option.UseSqlServer(builder.Configuration.GetConnectionString("default")));
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
         
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();
            app.UseCors("MyAllowSpecificOrigins");

            app.MapControllers();

            app.Run();
            
        }
    }
}