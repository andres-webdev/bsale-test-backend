const pool = require('../db/db');
const productController = {};

function queryResult(error, result, response, msg){
  if(error){
    throw error;
  } else{
    response.status(200).json(result);
    console.log(msg);
  }
}

productController.products = (req, res) => {

  pool.query('SELECT * FROM product ORDER BY name ASC', (error, result) => {

    queryResult(error, result, res, msg='A-Z');
  });
};

productController.productsDesc = (req, res) => {

  pool.query('SELECT * FROM product ORDER BY name DESC', (error, result) => {

    queryResult(error, result, res, msg='Z-A');
  });
};

productController.priceProductsAsc = (req, res) => {

  pool.query('SELECT * FROM product ORDER BY price ASC', (error, result) => {

    queryResult(error, result, res, msg='Menor precio');
  });
};

productController.priceProductsDesc = (req, res) => {

  pool.query('SELECT * FROM product ORDER BY price DESC', (error, result) => {

    queryResult(error, result, res, msg='Mayor precio');
  });
};

productController.productByName = (req, res) => {

  pool.query(`SELECT * FROM product WHERE name LIKE '${req.params.name}%'`, (error, result) => {
    
    queryResult(error, result, res, msg='Buscar nombre');
  });
};

productController.productsByDiscount = (req, res) => {

  pool.query(`SELECT * FROM product WHERE discount > 0 ORDER BY discount DESC`, (error, result) => {
    
    queryResult(error, result, res, msg='Ordenar por descuento');
  });
};

module.exports = productController;