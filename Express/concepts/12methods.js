const express = require('express')
const app = express()
let { people } = require('./data')

//NOTE in order to send post data we need a tool called postman


//NOTE In Express.js express.urlencoded() is a middleware that parses incoming request bodies containing URL-encoded data (i.e., data from HTML form submissions using form action keyword in html ) .


//NOTE express.urlencoded  => This middleware parses URL-encoded data and puts the parsed data into req.body.


//NOTE - This option controls how the URL-encoded data is parsed:

// false: Means the data will be parsed using the querystring library, which can handle simple key-value pairs.

// true: Uses the qs library, which can handle nested objects and more complex data structures in the form data.


// static assets
app.use(express.static('./methods-public'))
// parse incoming request form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})


app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
  res.status(201).json({ success: true, person: name })
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

//NOTE it runs after the user logs in  and req.body is used to acces the data submitted by user it contains all the data captured by  form html

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
  res.send("Post")
})

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})