/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var RecommandProduct = new keystone.List('RecommandProduct', {
    label: '推荐商品',
    map:{name:'product'}
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
RecommandProduct.add({
    // name: { label: '商品名称', type: String, required: true, index: true,intial:true },   
    product:{label:'推荐商品',type:Types.Relationship,ref:'Product'},
    sort:{label:"排序",type:Types.Number,default:0,index:true},
    isUse:{label:'启用',type:Boolean,default:true}
}
);

RecommandProduct.register();