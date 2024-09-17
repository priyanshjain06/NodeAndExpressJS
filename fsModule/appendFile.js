//NOTE  appendFile , appendFileSync
// appendFile: appends data to a file. If the file doesn't exist, it will create the file.

// If the file doesn't exist, it will be created.
// If the file exists, the new data is added at the end of the file, preserving the existing content.

const express = require ("express")
const fs = require ("fs")

fs.appendFile('../first.txt',' added by using appendfile function ',(err)=>{
    if(err) console.log(err);
    else console.log('data added successfull') 
})

//NOTE async version of appendFileSync:

const dataToAppend = ' added by using appendFileSync function ';

try {
    fs.appendFileSync('../first.txt', dataToAppend);
    console.log('Data added successfully');
} catch (err) {
    console.error('Error appending data:', err);
}


//used to delete any file
fs.unlink('../first.txt', (err)=>{
if(err) {
    console.log(err)
} else {
    console.log('file deleted')
}
})

//used to rename specific file
fs.renameSync('text.txt','example.txt')
// text.txt is renamed to example.txt


