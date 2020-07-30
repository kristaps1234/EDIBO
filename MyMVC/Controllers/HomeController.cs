using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        // 
        // GET: /HelloWorld/

        public string Index()
        {
            return "This is my default action...";
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string Welcome(string Kristaps, int ID = 1) 
        {
            return HtmlEncoder.Default.Encode($"Hello Kristaps, ID: 1");
        }
    }
}
// using System;
// using System.Collections.Generic;
// using System.Diagnostics;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.Extensions.Logging;
// using MyMVC.Models;

// namespace MyMVC.Controllers
// {
//     public class HomeController : Controller
//     {
//         private readonly ILogger<HomeController> _logger;

//         public HomeController(ILogger<HomeController> logger)
//         {
//             _logger = logger;
//         }

//         public IActionResult Index()
//         {
//             return View();
//         }

//         public IActionResult Privacy()
//         {
//             return View();
//         }

//         [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
//         public IActionResult Error()
//         {
//             return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
//         }
//     }
// }
