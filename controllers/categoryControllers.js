const dataBase = require('../db/database')
const categoryController = {}

categoryController.categories = (req, res) => {
  dataBase(req, res, 'SELECT * FROM category')
}

module.exports = categoryController
