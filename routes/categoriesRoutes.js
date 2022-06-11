const express = require('express')
const route = express.Router()
const { categories } = require('../controllers/categoryControllers')

const categoryRoutes = {}

categoryRoutes.category = route.get('/api/category', categories)

module.exports = categoryRoutes
