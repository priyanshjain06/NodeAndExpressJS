const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./9logger')
const authorize = require('./10authorize')

//NOTE we have 4 types of middleware 
// 1. built in middleware
// 2. custom middleware
// 3. third party middleware
// 4. error handling middleware (GLOBAL MIDDLEWARE)

// 1. built in middleware Example :
// app.use(express.static('./public'))

// 2. custom middleware Example :
// logger and authorize

// 3. third party middleware Example :
// morgan npm package see in npmjs.com
// app.use(morgan('tiny'))


app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})