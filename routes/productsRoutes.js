const express = require('express');
const route = express.Router();
const productController = require('../controllers/productControllers');

const productRoutes = {};

productRoutes.products = route.get('/api/products', productController.products);

productRoutes.searchProduct = route.get('/api/products/:name', productController.productByName)

module.exports = productRoutes;
