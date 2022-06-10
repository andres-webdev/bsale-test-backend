const pool = require('../db/db')
const productController = {}

function queryResult (error, result, response, msg) {
  if (error) {
    response.status(404).end()
    throw error
  } else {
    response.status(200).json(result)
  }
}

productController.products = (req, res) => {
  pool.query('SELECT * FROM product ORDER BY name ASC', (error, result) => {
    queryResult(error, result, res)
  })
}

productController.productsDesc = (req, res) => {
  pool.query('SELECT * FROM product ORDER BY name DESC', (error, result) => {
    queryResult(error, result, res)
  })
}

productController.priceProductsAsc = (req, res) => {
  pool.query('SELECT * FROM product ORDER BY price ASC', (error, result) => {
    queryResult(error, result, res)
  })
}

productController.priceProductsDesc = (req, res) => {
  pool.query('SELECT * FROM product ORDER BY price DESC', (error, result) => {
    queryResult(error, result, res)
  })
}

productController.productByName = (req, res) => {
  pool.query(`SELECT * FROM product WHERE name LIKE '${req.params.name}%'`, (error, result) => {
    queryResult(error, result, res)
  })
}

productController.productsByDiscount = (req, res) => {
  pool.query('SELECT * FROM product WHERE discount > 0 ORDER BY discount DESC', (error, result) => {
    queryResult(error, result, res)
  })
}

module.exports = productController
