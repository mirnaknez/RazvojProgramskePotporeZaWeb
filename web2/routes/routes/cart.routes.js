var express = require('express');
var router = express.Router();
const data = require('../data/mydata');

router.get('/', function(req, res) {
    cart = req.session.cart || {};
    res.render('cart', {cart : cart, data : data});
});
router.get('/add/:productIndex([0-9]{0,9})', function(req, res) {
    cart = req.session.cart || {};
    let count = req.session.count || 0;

    var newproduct;
    const productIndex = (req.params.productIndex);
    // for (const category of data.categories) {
    //     for (const product of category.products) {
    //         if (product.id === Number(productIndex)) {
    //             newproduct = product;
    //         }
    //     }
    // }
    if(cart[productIndex]) {
        cart[productIndex] = cart[productIndex] + 1;
    } else {
        cart[productIndex] = 1;
    }
    req.session.cart = cart;
    req.session.count = count;
    res.redirect('/cart');
});

router.get('/remove/:productIndex([0-9]{0,9})', function(req, res) {
    cart = req.session.cart || {};
    let count = req.session.count || 0;

    var newproduct;
    const productIndex = (req.params.productIndex);
    // for (const category of data.categories) {
    //     for (const product of category.products) {
    //         if (product.id === Number(productIndex)) {
    //             newproduct = product;
    //         }
    //     }
    // }
    if(cart[productIndex] > 1) {
        cart[productIndex] = cart[productIndex] - 1;
        count = count - 1;
    } else {
        cart[productIndex] = 0;
        count = count - 1;
    }
    req.session.cart = cart;
    req.session.count = count;
    res.redirect('/cart');
});
router.get('/getAll', function(req, res) {
    cart = req.session.cart || {};
    let count = req.session.count || 0;

    res.render('cart', {cart : cart, data : data});
});


module.exports = router;