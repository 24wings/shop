/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var User = new keystone.List('User', {
    label: '用户',
    map:{name:'name'}
});


User.add({
    name: { label: '姓名', type: String, required: true, index: true ,initial: true },
    username:{label:'用户名',type:String,required:true,index:true,initial: true },
    password: { label: '密码', type: String },
    // canAccessKeystone: { label: '是否可访问后台', type: Boolean, initial: true }
});
User.register();