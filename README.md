# Event bus

A minimalism but expressive event bus for JS pub/sub scene.
Just for simple scene.
You can add your own feature free.

## Install

```bash
$ npm i fizz-event-bus --save
```

## Usage

```tsx
import eventBus from 'fizz-event-bus';

function hander(param) {
  console.log(param);
}

eventBus.on('foo', handler);

// somewhere after import('fizz-event-bus')
eventBus.emit('foo', 'bar');
```

As default, eventBus is a global object. But you can import the eventBus constructor for create a new EventBus or inherit it.
