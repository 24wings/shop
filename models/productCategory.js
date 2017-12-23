/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ProductCategory = new keystone.List('ProductCategory', {
    label: '商品分类',
    map:{name:'name'}
});


ProductCategory.add({
    name:{label:'分类名称',type:String},
    image:{label:'类别图片,用于推荐显示',type: Types.CloudinaryImages, folder: 'path/to/image'}
});


ProductCategory.register();