const express = require('express')
const route = express.Router()
const { products, productByName, productsDesc, priceProductsAsc, priceProductsDesc, productsByDiscount, productsByCategory } = require('../controllers/productControllers')

const productRoutes = {}

productRoutes.products = route.get('/api/products', products)

productRoutes.searchProduct = route.get('/api/products/:name', productByName)

productRoutes.orderProductByNameDesc = route.get('/api/products/order/Z-A', productsDesc)

productRoutes.orderProductByPriceAsc = route.get('/api/products/order/lowerprice', priceProductsAsc)

productRoutes.orderProductByPriceDesc = route.get('/api/products/order/higherprice', priceProductsDesc)

productRoutes.discountProducts = route.get('/api/products/order/discount', productsByDiscount)

productRoutes.productsByCategory = route.get('/api/products/category/:id', productsByCategory)

module.exports = productRoutes
