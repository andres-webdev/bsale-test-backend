const express = require('express');
const route = express.Router();
const categoryController = require('../controllers/categoryControllers');

const categoryRoutes = {};

categoryRoutes.category = route.get('/api/category', categoryController.categories);

categoryRoutes.productsByCategory = route.get('/api/category/:id', categoryController.productsByCategory);

module.exports = categoryRoutes;