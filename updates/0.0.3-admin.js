var keystone = require('keystone'),
Admin = keystone.list('Admin');

exports = module.exports = function(done) {

    new Admin.model({
        name: { first: 'Admin', last: 'User' },
        email: '111@qq.com',
        password: '111',
        canAccessKeystone: true
    }).save(done);

};