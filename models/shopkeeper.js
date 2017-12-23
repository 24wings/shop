/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ShopKeeper = new keystone.List('ShopKeeper', {
    label: '商家',
    map:{name:'shopName'}
});


ShopKeeper.add({
    
    shopName:{label:'店铺名称',type:String},
    address:{label:'地址',type:String,required:true, initial: true, index:true},
    contact:{label:"联系方式",type:String,},
    addressMap:{label:'地址地图',type:Types.CloudinaryImage,}
    // password: { label: '密码', type: Types.Password, initial: true },
    // canAccessKeystone: { label: '是否可访问后台', type: Boolean, initial: true }
});
ShopKeeper.register();