const path = require('path')

console.log(path.sep) //REVIEW  gives system seprator  for knowing difference between  mac and windows 

const filePath = path.join('/content/', 'subfolder', 'path.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
// gives file name in this case

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'path.txt')
console.log(absolute)
