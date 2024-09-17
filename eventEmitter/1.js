//NOTE Event MOdule is an inbuilt module of node js

//NOTE -  to remove an event
//  event.off('myEvent', callback); 

const EventEmitter = require('events')
//NOTE - EventEmittere is the class exported from the event module

const customEmitter = new EventEmitter()

//NOTE  on is used to listen or define a function for specific event passed in params below response is the name of the event 

//NOTE - emit is used to fire the event 
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)