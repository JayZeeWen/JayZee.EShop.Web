using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JayZee.EShop.DAL;
using JayZee.EShop.Entity;

namespace JayZee.EShop.Logic
{
    public static class UserInfoLogic
    {
        private static UserDAL _dal = new UserDAL();
        public static void Add(t_users User)
        {
            _dal.Add(User);
        }
    }
}
