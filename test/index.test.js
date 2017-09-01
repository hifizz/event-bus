var eventBus = require('../index');



describe('Sub a event', function () {
  it('sub"', function () {
    eventBus.on('demo', function (data) {
      console.log(data);
    });
    eventBus.on('demo', function (data) {
      console.log('=======');
    });
  });
  
  it('pub', function () {
    eventBus.emit('demo', 'hello world');
  });
  
  it('receive two argus can divide to the handle function', function () {
    
  })
});