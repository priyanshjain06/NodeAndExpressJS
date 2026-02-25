const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size of buffer
// default buffer size -16kb
// const stream = createReadStream('./content/big.txt', { highWaterMark: 64*1024 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

const stream = createReadStream('./content/big.txt')

stream.on('error', (err) => console.log(err))stream.on('data', (result) => {
  console.log(result)
}

