using Microsoft.EntityFrameworkCore;

using System;
using System.Threading.Tasks;

namespace DataRepository.GateWay
{
    public class DbConext:DbContext
    {
        public DbConext(DbContextOptions<DbConext> options):base(options)
        {
           

           

            
        }
       
        protected override void OnModelCreating(ModelBuilder modelBuilder)

        {

           

        }
    
    




        public  DbSet<RegistrarsRepository> Registrars { get; set; }

        


    }
}
