using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JayZee.EShop.Web.Startup))]
namespace JayZee.EShop.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
