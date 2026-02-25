const http = require('http');

const EventEmitter = require('events'); 

const event = new EventEmitter(); 

event.on('start',() => {
    console.log('event is emitted or started');
})

event.emit('start')  

const server = http.createServer((req, res) => {
    res.end('Hello Priyansh  from server'); });

server.listen(3000,
    () => console.log('Server is listening on port 3000')
);

server.on('request',() => {
    console.log('request is made');
})

setTimeout(()=> {
    server.close() //REVIEW -   no event but method function
},10000)

server.on('close',() =>{
    console.log('server is closed')
}
)
server.on('connection',() =>{
    console.log('new connection is made');
})






