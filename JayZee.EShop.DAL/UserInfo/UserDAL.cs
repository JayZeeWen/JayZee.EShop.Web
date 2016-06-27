using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JayZee.EShop.Entity;

namespace JayZee.EShop.DAL
{
    public class UserDAL
    {
        private EShopEntities context = new EShopEntities();
        public void Add(t_users User)
        {
            context.t_users.Add(User);
            context.SaveChanges();
        }


    }
}
