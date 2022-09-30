const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data recived ${name} with id : ${id}`);
})
customEmitter.on('response',()=>{
    console.log(`second data recived`);
})



customEmitter.emit('response','jhon',34)
