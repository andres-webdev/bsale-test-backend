const pool = require('../db/db');
const categoryController = {};

function queryResult(error, result, response){
  if(error){
    throw error;
  } else{
    response.status(200).json(result);
    console.log('Categoria OK');
  }
}

categoryController.categories = (req, res) => {

  pool.query('SELECT * FROM category', (error, result) => {
    
    queryResult(error, result, res);
  });
};

categoryController.productsByCategory = (req, res) => {

  pool.query('SELECT * FROM product WHERE category=?', [req.params.id], (error, result) => {
    
    queryResult(error, result, res);
  });
};

module.exports = categoryController;