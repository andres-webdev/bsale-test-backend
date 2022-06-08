const pool = require('../db/db');
const productController = {};

productController.products = (req, res) => {

  pool.query('SELECT * FROM product', (error, result) => {

    if(error){
      throw error;
    } else{
      res.status(200).json(result);
      console.log('Allproducts OK');
    }
  });
};

productController.productByName = (req, res) => {

  pool.query(`SELECT * FROM product WHERE name LIKE '${req.params.name}%'`, (error, result) => {
    if(error){
      throw error;
    } else{
      res.status(200).json(result);
      console.log('Product By Name OK');
    }
  });
};

module.exports = productController;