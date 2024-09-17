const { readFile, writeFile } = require('fs')

const writedata = "Here is the result :"

console.log('start')
readFile('../Node/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  else{
    console.log(result);
    
  }
  const first = result
  readFile('../Node/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    else{
      console.log(result);
    }
    const second = result
    writeFile(
      '../Node/result-async.txt',
      writedata `${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

// NOTE  Example of async writefile:
// console.log('dr',__dirname)
// const filePath = path.join(__dirname , 'index.txt')
// fs.readFile(filePath,'utf-8', (err,data)=>{
//     if (err) console.log(err);
//     else console.log(data)
// })