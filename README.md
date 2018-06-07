# Event bus

![Travis CI build](https://travis-ci.org/hifizz/event-bus.svg?branch=master)

A minimalism but expressive event bus for JS pub/sub scene.
Just for simple scene.

## Install

```bash
npm i fizz-event-bus --save
```

## Usage

```tsx
import eventBus from 'fizz-event-bus';

function hander(param) {
  console.log(param);
}

eventBus.on('foo', handler);

// somewhere after import from 'fizz-event-bus'
eventBus.emit('foo', 'bar');
```

If you are using TypeScript, don't warry, it support!
