const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productsRoutes');
const categoryRoutes = require('./routes/categoriesRoutes');

app.use(cors());

// Mostrar todos los productos A-Z
app.use(productRoutes.products);

// Busca producto por nombre
app.use(productRoutes.searchProduct);

// Mostrar productos ordenados por nombre Z-A
app.use(productRoutes.orderProductByNameDesc);

// Mostrar los productos ordenados por precio - ASC
app.use(productRoutes.orderProductByPriceAsc);

// Mostrar los productos ordenados por precio - DESC
app.use(productRoutes.orderProductByPriceDesc);

// Mostrar productos con descuento
app.use(productRoutes.discountProducts);

// Lista de categorias
app.use(categoryRoutes.category);

// Mostrar productos por categoria
app.use(categoryRoutes.productsByCategory);

app.listen(3000, () => {
  console.log('Servidor Ok - Running...');
});
