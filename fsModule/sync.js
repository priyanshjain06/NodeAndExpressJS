const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('../Node/first.txt', 'utf8')
const second = readFileSync('../NOde/second.txt', 'utf8')

writeFileSync(
  '../Node/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')

//NOTE : writeFileSync:
// If the file doesn't exist, it will be created.
// If the file exists, its previous content will be completely overwritten by the new data.
