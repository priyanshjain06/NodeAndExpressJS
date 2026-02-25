const express = require('express')
const os = require('os')
const path = require('path')


console.log(path.dirname('C:/Users/Desktop/batchfirstNode'));
// will return the parent directory.


console.log(path.extname('C:/Users/Desktop/batchfirstNode/index.js'));
// Purpose: Returns the extension of the file, including the dot.


console.log(path.basename('C:/Users/Desktop/batchfirstNode/index.js'))
// Returns the last part of a path (the file name in this case).

console.log(path.parse('C:/Users/Desktop/batchfirstNode/index.js'))
// Returns an object with the root, directory, base, name, and ext properties of the path.

console.log(path.join('Users', 'local', 'bin', 'index.js'))
//REVIEW  gives relative path not always but 

console.log(path.resolve('Users', 'local', 'bin', 'index.js'))
//REVIEW always  gives absolute path , it is a complete path

