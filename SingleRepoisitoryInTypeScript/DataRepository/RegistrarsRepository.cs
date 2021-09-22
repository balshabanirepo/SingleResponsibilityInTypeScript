using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DataRepository
{
   public  class RegistrarsRepository
    {
        [Key]
        public int Id { get; set; }
        public string Name  { get; set; }

        public string Telephone { get; set; }

        public string Email { get; set; }




    }
}