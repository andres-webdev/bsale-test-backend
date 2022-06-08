const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productsRoutes');
const categoryRoutes = require('./routes/categoriesRoutes');

app.use(cors());

// Mostrar todos los productos
app.use(productRoutes.products);

// Busca producto por nombre
app.use(productRoutes.searchProduct);

// Lista de categorias
app.use(categoryRoutes.category);

// Mostrar productos por categoria
app.use(categoryRoutes.productsByCategory);

app.listen(3000, () => {
  console.log('Servidor Ok - Running...');
});
