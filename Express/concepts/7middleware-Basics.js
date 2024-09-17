const express = require('express')
const app = express()

//NOTE - the flow of the code:
//  req => middleware => res

//NOTE -  remember the middleware is always executed first then the handler is executed 

//NOTE -  the app.use get executed first just like middleware 
// but it only get triggerd when the base line the url matches the request url
// like in this case /api/home/products => it will trigger when the base url is /api

//NOTE - to make middleware async use async/await or promises 
// the are by default sync so always define middlewares first before 
// the handler

// app.use('/api',logger);

//NOTE -  the bellow code will executed for every base url
// app.use (logger)

//app.use
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})

app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})