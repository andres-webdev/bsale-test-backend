const express = require('express')
const route = express.Router()
const { categories, productsByCategory } = require('../controllers/categoryControllers')

const categoryRoutes = {}

categoryRoutes.category = route.get('/api/category', categories)

categoryRoutes.productsByCategory = route.get('/api/category/:id', productsByCategory)

module.exports = categoryRoutes
