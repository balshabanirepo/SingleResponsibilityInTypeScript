﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SingleRepoisitoryInTypeScript.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValidationServiceController : ControllerBase
    {
        // GET: api/<ValuesController>

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        [Route("ValidateEmail")]
        public string ValidateEmail(string email,string token)
        {
            return "value";
        }

        [HttpGet("{id}")]
        [Route("ValidatePhone")]
        public string ValidatePhone(string Telephone)
        {
            return "value";
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
