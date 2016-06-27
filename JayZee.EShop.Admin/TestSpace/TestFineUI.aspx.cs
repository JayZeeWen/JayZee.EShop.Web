using FineUI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JayZee.EShop.Admin.TestSpace
{
    public partial class TestFineUI : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnHello_Click(object sender, EventArgs e)
        {
            Alert.Show("你好 FineUI！", MessageBoxIcon.Warning);
        }

        protected void btnHello2_Click(object sender, EventArgs e)
        {
            Alert.ShowInTop("你好 FineUI！", MessageBoxIcon.Information);
        }
    }
}