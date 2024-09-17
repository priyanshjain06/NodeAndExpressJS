const express = require('express')
const app = express()
const logger = require('./9logger')
const authorize = require('./10authorize')

app.use([logger, authorize])

//NOTE -  logger is executed first then authorize is executed 

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

//NOTE  middleware are cruical because i will be able to excess the user info at any route  in my app.js

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})