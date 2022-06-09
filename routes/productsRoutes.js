const express = require('express');
const route = express.Router();
const productController = require('../controllers/productControllers');

const productRoutes = {};

productRoutes.products = route.get('/api/products', productController.products);

productRoutes.searchProduct = route.get('/api/products/:name', productController.productByName);

productRoutes.orderProductByNameDesc = route.get('/api/products/order/Z-A', productController.productsDesc);

productRoutes.orderProductByPriceAsc = route.get('/api/products/order/lowerprice', productController.priceProductsAsc);

productRoutes.orderProductByPriceDesc = route.get('/api/products/order/higherprice', productController.priceProductsDesc);

productRoutes.discountProducts = route.get('/api/products/order/discount', productController.productsByDiscount);

module.exports = productRoutes;
