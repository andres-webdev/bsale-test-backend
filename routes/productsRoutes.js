const { Router } = require('express')
const { products, productByName, productsDesc, priceProductsAsc, priceProductsDesc, productsByDiscount, productsByCategory } = require('../controllers/productControllers')
const route = Router()

route.get('/', products)

route.get('/:name', productByName)

route.get('/order/Z-A', productsDesc)

route.get('/order/lowerprice', priceProductsAsc)

route.get('/order/higherprice', priceProductsDesc)

route.get('/order/discount', productsByDiscount)

route.get('/category/:id', productsByCategory)

module.exports = route
