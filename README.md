# event-bus
This is a simple js event bus for simple scene.

## install

```bash
$ npm i fizz-event-bus --save-dev 
```

## start

```js
var eventBus = require('fizz-event-bus');

eventBus.on('open', function(message) {
	console.log(message);
});

// somewhere after require('fizz-event-bus')
eventBus.emit('open', 'hello, you are cute.');
```
