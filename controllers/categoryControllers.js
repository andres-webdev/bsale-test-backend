const pool = require('../db/db');
const categoryController = {};

categoryController.categories = (req, res) => {

  pool.query('SELECT * FROM category', (error, result) => {
    if(error){
      throw error;
    } else{
      res.status(200).json(result);
      console.log('Categoria OK');
    }
  });
};

categoryController.productsByCategory = (req, res) => {

  pool.query('SELECT * FROM product WHERE category=?', [req.params.id], (error, result) => {
    if(error){
      throw error;
    } else {
      res.status(200).json(result);
      console.log('Product By Category OK');
    }
  });
};

module.exports = categoryController;