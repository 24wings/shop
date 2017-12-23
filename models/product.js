/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
    label: '商品'
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
Product.add({
    name: { label: '商品名称', type: String, required: true, index: true,intial:true },   
    productCategory:{label:'商品分类',type:Types.Relationship,ref:'ProductCategory'},
    images:{label:'产品图片', type: Types.CloudinaryImages, folder: 'path/to/image' },
    // shopKeeper:{label:'发布商家',type:Types.Relationship,ref:'ShopKeeper'},
}
);

Product.register();