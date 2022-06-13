const dataBase = require('../db/database')
const productController = {}

productController.products = (req, res) => {
  dataBase(req, res, 'SELECT * FROM product ORDER BY name ASC')
}

productController.productsDesc = (req, res) => {
  dataBase(req, res, 'SELECT * FROM product ORDER BY name DESC')
}

productController.priceProductsAsc = (req, res) => {
  dataBase(req, res, 'SELECT * FROM product ORDER BY price ASC')
}

productController.priceProductsDesc = (req, res) => {
  dataBase(req, res, 'SELECT * FROM product ORDER BY price DESC')
}

productController.productByName = (req, res) => {
  dataBase(req, res, `SELECT * FROM product WHERE name LIKE '%${req.params.name}%'`)
}

productController.productsByDiscount = (req, res) => {
  dataBase(req, res, 'SELECT * FROM product WHERE discount > 0 ORDER BY discount DESC')
}

productController.productsByCategory = (req, res) => {
  dataBase(req, res, `SELECT * FROM product WHERE category=${req.params.id}`)
}

module.exports = productController
