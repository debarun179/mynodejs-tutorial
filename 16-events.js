// variable EventEmitter is a class
const EventEmitter = require('events');
// customEmitter instantiates the EventEmitter as below
const customEmitter = new EventEmitter();

//on will listen for an event and emit to emit an event
customEmitter.on('response1',(name,id)=>{
    console.log(`data received \nName: ${name}, ID: ${id}`)
})
// we can have multiple functions that listen for the same event
customEmitter.on('response1',()=>{
    console.log(`some other logic`)
})

// emit the event named response1. Emit must come after listen/on so order matters
customEmitter.emit('response1','John',23)