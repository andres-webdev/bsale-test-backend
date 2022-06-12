if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const app = express()

// Settings
app.set('port', process.env.PORT || 3001)
app.use(cors())

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//  Routes - Products and Category

app.use('/api/products', require('./routes/productsRoutes'))
app.use('/api/category', require('./routes/categoryRoutes'))

//  Static files

app.use(express.static(path.join(__dirname, 'public')))

// Error 404
app.use((req, res) => {
  res.status(404).send('Error: Not found or page doesn\'t exist')
})

// Start Server

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})
