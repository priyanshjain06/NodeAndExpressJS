//NOTE HTTP MODULE:
// http have have  two object called req, res
 // request is send  from client to server , from frontend to backend
 // response is send from server to client , it is used to send data

//NOTE Server
// server.listen(port[, hostname][, backlog][, callback]) 
// where port is required 

// NOTE Default Host:
// localhost=> 127.0.0.1 

// NOTE PORT :
// port 80 is default port



const http = require('http');
// It provides objects and methods

const server = http.createServer((req, res) => {
    console.log(req); // object
    console.log(res); // object
    
    res.end('Hello Priyansh Jain from server');
});


server.listen(3000, () => {
    console.log('Server is listening on port 3000');

  });

