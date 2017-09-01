var eventBus = require('../index');

eventBus.on('demo', function (data) {
  console.log(data);
});

function b(data) {
  console.log('=======');
}

eventBus.on('demo', b);

eventBus.off('demo', b);

eventBus.emit('demo', 'hello world');
