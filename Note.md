# npm (Node Package Manager)

`npm` stands for **Node Package Manager**.

To explore or install npm utilities, visit the [npm website](https://www.npmjs.com).

# to remove git folders from project:
  
 rmdir -Force -Recurse .gti

# installation :

`installation process `

npm i express --save

always use save  to recover the node modules 

`to initaize package.json`

npm init -y
 
`nodemon`

npm install -g nodemon
it install globally

npm i nodemon --save-dev
see package.json
to install locally

`to run file`

nodemon filename with file extension

` to add shortcuts`
"scripts": {
start: "nodemon server.js

}

# nodemon

`why is nodemon used ?`

Automatic Server Restart
When you're working on a Node.js application, changes to the code won't take effect unless you manually stop and restart the server. With nodemon, this process is automated, saving time and reducing errors.

# EventLoop

It basically ,based on the concept of ` offloading` 

Node.js uses the event loop to handle ` I/O operations` (like reading files, making HTTP requests, etc.) asynchronously, allowing the program to continue executing other code while waiting for these operations to complete.

It is the heart of Node.js's single-threaded architecture, managing the execution of `callbacks and non-blocking tasks.`

IN SHORT, The event loop in Node.js is a mechanism that allows non-blocking, asynchronous operations to be executed efficiently.


# avoiding overwriting of data
`flag : a Meaning` :
The { flag: 'a' } option in the writeFileSync method specifies how the file should be opened.

In this case, 'a' stands for append mode, meaning that the data will be added to the end of the file instead of overwriting its existing content

# stream :

In Node.js, streams are used to `handle continuous data flow in a memory-efficient way `, especially when dealing with large data like files, network connections, or HTTP requests. Instead of reading or writing all the data at once, streams process data `chunk by chunk ` making them ideal for handling large amounts of data.

`Pipe `

 Streams can be connected to each other using the .pipe() method, allowing for efficient data flow (e.g., reading from a file and writing to another)

 `Types of stream :`

 readable 

 writeable 

 both called duplex (read and write)
 
 trasnform stream ( to mdify the data)


 # http request/response strcture

` res.end() `

 it is method which indicates the server that all the required information like headers and body of the message has been sented competely

# Different Status Code :

ok and created status code are important
400 ,401,404 are important

` refer to mdn for status codes:`

`200 ok` 

 Indicates that the request was successful and the server has returned the requested resource (data).


`201 created` 

 Indicates that the request was successful and that a new resource was created as a result of the request.

used in api for new entity

response to sucessfull post request for <i> new user</i> 



`400 Bad Request`

Purpose: Indicates that the server could not understand the request due to invalid syntax or incorrect formatting.

`401 Unauthorized `



`404 not found:`

Purpose: Indicates that the requested resource could not be found on the server.