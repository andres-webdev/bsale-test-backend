const pool = require('../db/db')
const productController = {}

async function queryResult (error, result, response) {
  if (error) {
    await response.status(404).send(error).end()
    throw error
  } else {
    await response.status(200).json(result).end()
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

productController.productsByCategory = (req, res) => {
  pool.query('SELECT * FROM product WHERE category=?', [req.params.id], (error, result) => {
    queryResult(error, result, res)
  })
}

module.exports = productController
