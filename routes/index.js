var keystone = require('keystone'),
    middleware = require('./middleware'),
    importRoutes = keystone.importer(__dirname); //generate 

// common  middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);


// 404 Error Handle
keystone.set('404', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});


// load routes 
var routes = {
    views: importRoutes('./views')
};

exports = module.exports = function(app) {
    app.get('/data', routes.views.data.getData);
    app.get('/', routes.views.data.getHome);
    app.get('/login',routes.views.data.getLogin);
    app.post('/login', routes.views.data.login);
    app.get('/admin',routes.views.admin.getHome);


    // app.get('/petAction/top3', routes.views.petAction.Top3);
    // app.get('/data/getData', routes.views.data.getData);
    // app.get('/data/getDataById', routes.views.data.getDataById);
};