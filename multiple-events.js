var events=require('events');
var eventEmitter=new events.EventEmitter()

var listener1=function listener1()
{
	console.log('listener 1 done')
}

var listener2=function listener2()
{
	console.log('listener 2 done')
}

eventEmitter.on('connection', listener1)

eventEmitter.on('connection', listener2)

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

