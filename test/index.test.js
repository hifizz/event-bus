var eventBus = require('../index');

function demoHandle(data) {
  console.log('demoHandle is fired');
}

function anoTherHandle() {
  
}

describe('Sub a event', function () {
  it('Call on add key to eventList, callback to a array"', function () {
    eventBus.on('demo', demoHandle);
    (eventBus.eventList).should.have.keys('demo');
    (eventBus.eventList.demo).should.have.length(1);
    (eventBus.eventList.demo[0]).should.be.equal(demoHandle);
  });
  
  //it('Call the on() once again, add another handle function to the demo chanle', function () {
  //  eventBus.on('demo', anoTherHandle);
  //  should(eventBus.eventList.demo[1]).to.be();
  //});
  //
  //it('pub', function () {
  //  eventBus.emit('demo', 'hello world');
  //});
  //
  //it('receive two argus can divide to the handle function', function () {
  //
  //})
});