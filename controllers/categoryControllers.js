const pool = require('../db/db')
const categoryController = {}

async function queryResult (error, result, response) {
  if (error) {
    await response.status(404).send(error).end()
    throw error
  } else {
    await response.status(200).json(result).end()
  }
}

categoryController.categories = (req, res) => {
  pool.query('SELECT * FROM category', (error, result) => {
    queryResult(error, result, res)
  })
}

module.exports = categoryController
