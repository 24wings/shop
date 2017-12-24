var keystone = require('keystone');
var swig = require('swig');
swig.setDefaults({cache:false});
keystone.set('view engine', 'html');
keystone.set('custom engine', swig.renderFile);

keystone.set('cloudinary config','cloudinary://688229757297621:D-7VrFqtn6ayg6ItFNXSm52jcS0@dnf1ydl7w');

// load model
require('./models');
// init app  ,such as static_file,view_engine,mongo
keystone.init({
    'name': '有这个必要吗',
    'brand': ' /data',
    port:80,
    // 'favicon':'public/favicon.ico',
    'less': 'public',
    'static': 'public',
    'views': 'templates/views',
    'auto update': true,
    'view cache':false,
    nav :{
        '人事管理':['Admin','User','ShopKeeper'],
        '商品管理':['ProductCategory','Product','Record'],
        '推荐管理':['RecommandProduct','RecommandCategory']
    },
    'mongo': 'mongodb://localhost/keystone-demo',
    // 'cloudinary config': 'cloudinary://688229757297621:D-7VrFqtn6ayg6ItFNXSm52jcS0@dnf1ydl7w',
    'embedly api key': 'adb1c865a9bc489dad997a5f5bddcd6a',
    'session': true,
    'auth': true,
    'user model': 'Admin',
    'cookie secret': 'my secret'
});



// load routes
keystone.set('routes', require('./routes'));

keystone.start();