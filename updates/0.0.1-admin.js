var keystone = require('keystone'),
Admin = keystone.list('Admin');

exports = module.exports = function(done) {

    new Admin.model({
        name: { first: 'Admin', last: 'User' },
        email: '123@qq.com',
        password: '13419597065',
        canAccessKeystone: true
    }).save(done);

};