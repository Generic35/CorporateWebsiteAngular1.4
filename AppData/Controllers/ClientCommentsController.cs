using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
    public class ClientCommentsController : ApiController
    {
        public JArray Get(string id = null)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JArray.Parse(System.IO.File.ReadAllText(path + "../app/data/ClientComments.json"));
        }
    }
}