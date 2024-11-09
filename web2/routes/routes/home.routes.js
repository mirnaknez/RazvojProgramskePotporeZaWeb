var express = require('express');
var router = express.Router();
const data = require('../data/mydata');

router.get('/', function(req, res) {
    if (!req.session.count) {
        req.session.count = 0;
    }
    res.render('home', { 
        categories: data.categories, 
        products: [], 
        category: {name: 'Odaberite kategoriju'},
        count : req.session.count
    });
});

router.get('/:categoryIndex([0-9]{0,9})', function(req, res) {
    const categoryIndex = parseInt(req.params.categoryIndex);
    const category = data.categories[categoryIndex];
    const products = category.products;
    if (!req.session.count) {
        req.session.count = 0;
    }
  
    res.render('home', { categories: data.categories, category, products, count : req.session.count });
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
        count = count + 1;
    } else {
        cart[productIndex] = 1;
        count = count + 1;
    }
    req.session.cart = cart;
    req.session.count = count;
  
    res.redirect('/' + productIndex[0]);
});

module.exports = router;