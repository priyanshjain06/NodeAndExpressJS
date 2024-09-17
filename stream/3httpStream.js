var http = require('http')
var fs = require('fs')

http
  .createServer( (req, res)=> {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)

// Example :
//   const { createReadStream, createWriteStream } = require('fs');

// const readStream = createReadStream('input.txt');
// const writeStream = createWriteStream('output.txt');

// // Pipe data from readStream to writeStream
// readStream.pipe(writeStream);
