const express = require('express')
const app = express()
const logger = require('./9logger')
const authorize = require('./10authorize')

app.use([logger, authorize]) //REVIEW  GLOBAL MIDDLEWARE that means it will run before any route handler 

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

// //REVIEW FLOW :If next() is NOT called, the request does NOT proceed to the router.
// Middleware that does not call next() must send a response (like res.status(401).send("Unauthorized")), or the request will hang.
// Middleware acts as a gatekeeper: If it blocks the request (by not calling next()), the route handler is never executed.