const  {createServer} = require('http');

const readfilesync  = require('fs').readFileSync;

// get all files

const homepage = readfilesync('./homepage.html');

const server = createServer((req, res) => {

    const url = req.url
    const urlmethod = req.method;

    console.log(url, urlmethod);
    
    if (req.url === '/')
    {
        res.writeHead(200,{'content-type': text/html})
        res.write(homepage)
        res.end()
    } 

    else if (req.url === '/about') 
    {
        res.writeHead(200,{'content-type': text/html})
        res.write('<h1>Welcome ! to about page </h1>')
        res.end()    
    } 

    else 
    {
        res.writeHead(404,{'content-type': text/html})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})