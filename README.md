# Event-bus
A minimalism but expressive event bus for JS pub/sub scene. Just for simple scene.
You can add your own feature free.

## nstall

```bash
$ npm i fizz-event-bus --save
```

## tart

```js
var eventBus = require('fizz-event-bus');

eventBus.on('open', function(message) {
	console.log(message);
});

// somewhere after require('fizz-event-bus')
eventBus.emit('open', 'hello, you are cute.');
```


