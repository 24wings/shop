/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Record = new keystone.List('Record', {
    label: '下单记录',
    map:{name:'product'}
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
Record.add({
    createDt: { label: '订单时间', type:Types.Datetime, required: true, index: true ,intial:true,default:Date.now},   
    product:{label:"货品",type:Types.Relationship,require:true,intial:true,ref:'Product'},
    shopKeeper:{label:'发布商家',type:Types.Relationship,ref:'ShopKeeper'},
    orderUser:{label:'发起订单的用户',type:Types.Relationship,ref:"User"},
    num:{label:'订单数量',type:Types.Number,default:1}
}
);

Record.register();