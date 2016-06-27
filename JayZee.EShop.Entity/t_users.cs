using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JayZee.EShop.Entity
{
    /// <summary>
	/// Users:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
    public partial class t_users
    {
        public t_users()
        { }
        #region Model
        private int _c_id;
        private string _c_user_name;
        private string _c_pwd;
        private string _c_mail;
        private string _c_pay_password;
        private string _c_phone;
        private int? _c_state;
        private DateTime? _c_db_last_update_date;
        private int? _c_db_last_update_id;
        private int? _c_db_status;
        /// <summary>
        /// 
        /// </summary>
        public int c_id
        {
            set { _c_id = value; }
            get { return _c_id; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string c_user_name
        {
            set { _c_user_name = value; }
            get { return _c_user_name; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string c_pwd
        {
            set { _c_pwd = value; }
            get { return _c_pwd; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string c_mail
        {
            set { _c_mail = value; }
            get { return _c_mail; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string c_pay_password
        {
            set { _c_pay_password = value; }
            get { return _c_pay_password; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string c_phone
        {
            set { _c_phone = value; }
            get { return _c_phone; }
        }
        /// <summary>
        /// 0：未激活  1：已激活    2：冻结
        /// </summary>
        public int? c_state
        {
            set { _c_state = value; }
            get { return _c_state; }
        }
        /// <summary>
        /// 
        /// </summary>
        public DateTime? c_db_last_update_date
        {
            set { _c_db_last_update_date = value; }
            get { return _c_db_last_update_date; }
        }
        /// <summary>
        /// 
        /// </summary>
        public int? c_db_last_update_id
        {
            set { _c_db_last_update_id = value; }
            get { return _c_db_last_update_id; }
        }
        /// <summary>
        /// 0：正常   1：删除
        /// </summary>
        public int? c_db_status
        {
            set { _c_db_status = value; }
            get { return _c_db_status; }
        }
        #endregion Model

    }
}
