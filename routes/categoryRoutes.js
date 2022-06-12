const express = require('express')
const { categories } = require('../controllers/categoryControllers')
const route = express.Router()

route.get('/', categories)

module.exports = route
