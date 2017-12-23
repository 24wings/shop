var keystone = require('keystone'),
    Admin = keystone.list('Admin');

exports = module.exports = function(done) {

    new Admin.model({
        name: { first: 'Admin', last: 'User' },
        email: '123@qq.com',
        password: '123',
        canAccessKeystone: true
    }).save(done);

};