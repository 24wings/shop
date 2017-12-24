/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Admin = new keystone.List('Admin', {
    label: '管理员',
    map:{name:'nickname'}
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
Admin.add({
    nickname: { label: '姓名', type: String,  },
    email: { label: '邮箱', type: Types.Email, required: true, initial: true, index: true },
    password: { label: '密码', type: Types.Password, initial: true },
    canAccessKeystone: { label: '是否可访问后台', type: Boolean, initial: true }
});

Admin.register();