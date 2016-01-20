var events =require('events');
var eventEmitter=new events.EventEmitter();

var connectHandler=function connected()
{
	console.log('connection succesfull');
	eventEmitter.emit('data received');

}

		eventEmitter.on('connection',connectHandler)
eventEmitter.on('data received',function(){
	console.log('data received succesfully');
});

eventEmitter.emit('connection')
console.log('program end') 