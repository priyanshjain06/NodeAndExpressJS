// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./2-names')
const sayHi = require('./3-utils')
const data = require('./4-alternative')

// it executd first 
require('./5-mindGenerator')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)