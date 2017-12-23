/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var RecommandCategory = new keystone.List('RecommandCategory', {
    label: '推荐商品类别',
    map:{name:'category'}
});


RecommandCategory.add({
    
    category:{label:'推荐分类',type:Types.Relationship,ref:'ProductCategory'},
    sort:{label:'排序',type:Types.Number,default:0,index:true},
    isUse:{label:'启用',type:Boolean,default:true}
});


RecommandCategory.register();