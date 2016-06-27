using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using JayZee.EShop.Entity;
using JayZee.EShop.Logic;

namespace JayZee.EShop.Web.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult RegisterUser()
        {
            return View();
        }
    }
}