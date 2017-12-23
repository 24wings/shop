var keystone = require('keystone');

exports.getData = async function (req, res) {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);
    let tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    let records = await keystone.list('Record').model.find({ createDt: { $gt: today, $lt: tomorrow } }).where().populate('orderUser shopKeeper product').exec();
    // let groups = [];
    // records.forEach(record=>{
    //    let hadGroup = groups.find(group=>group.orderUser);
    //    if(hadGroup)
    // });
    console.log(records);
    await res.render('data', { records });
};

exports.getHome = async (req, res) => {
    let user = req.session.user;
    let categorys = await keystone.list('ProductCategory').model.find().exec();
    user = true;
    if (user) {
        let recommandProducts = await keystone.list('RecommandProduct').model.find().populate('product').exec();
        console.log(recommandProducts);
        let recommandCategorys = await keystone.list('RecommandCategory').model.find().populate('category').exec();
        await res.render('home', { recommandProducts, recommandCategorys, categorys });

    } else {
        res.redirect('/login');
    }

}

exports.getLogin = async (req, res) => {
    let user = req.session.user;
    console.log(user);
    if (user) {
        res.redirect('/home')
    } else {

        await res.render('login');

    }
}

exports.login = async (req, res) => {
    let { username, password } = req.body;
    console.log(username, password);
    let user = await keystone.list('User').model.findOne({ username, password }).exec();
    console.log('exist', user);
    if (user) {
        req.session.user = user;
        res.locals.user = user;
        await res.redirect('/');
    } else {
        await res.render('login', { error: '用户名或密码错误' })
    }
}
exports.getCategoryDetail = async (req, res) => {
    let categoryId = req.params._id;
    let category = await keystone.list('ProductCategory').model.findById(categoryId).exec();
    let categorys = await keystone.list('ProductCategory').model.find().exec();


    if (category) {
        let products = await keystone.list('Product').model.find({ productCategory: categoryId }).exec();


        await res.render('categoryDetail', { category, products, categorys, products });
    }


}
exports.getProductDetail = async (req, res) => {
    let productId = req.params._id;

    let categorys = await keystone.list('ProductCategory').model.find().exec();
    let product = await keystone.list('Product').model.findById(productId).populate('productCategory').exec();
    let category = product.productCategory;
    let products = await keystone.list('Product').model.find({ productCategory: category._id }).exec();
    await res.render('productDetail', { product, category, categorys, products });
}

exports.order = async (req, res) => {
    let { productId, productCount } = req.body;
    let user = req.session.user;
    if (user) {
        let newRecord = await new keystone.list('Record').model({ orderUser: user._id, product: productId, num: productCount }).save();
        res.redirect('/product/' + productId)
    } else {
        res.redirect('/login');
    }


}