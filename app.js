const express = require('express')
const cors = require('cors')
const app = express()
const { products, searchProduct, orderProductByNameDesc, orderProductByPriceAsc, orderProductByPriceDesc, discountProducts, productsByCategory } = require('./routes/productsRoutes')
const { category } = require('./routes/categoriesRoutes')

app.use(cors())

// Mostrar todos los productos A-Z
app.use(products)

// Busca producto por nombre
app.use(searchProduct)

// Mostrar productos ordenados por nombre Z-A
app.use(orderProductByNameDesc)

// Mostrar los productos ordenados por precio - ASC
app.use(orderProductByPriceAsc)

// Mostrar los productos ordenados por precio - DESC
app.use(orderProductByPriceDesc)

// Mostrar productos con descuento
app.use(discountProducts)

// Lista de categorias
app.use(category)

// Mostrar productos por categoria
app.use(productsByCategory)

// Error 404
app.use((req, res) => {
  res.status(404).send('Error: Not found or page doesn\'t exist')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Servidor Ok - Running...')
})
