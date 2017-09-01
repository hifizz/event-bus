/**
 * THis is a normal object. When call the eventBus.on,
 * it use the eventName as a key, callback as a value.
 * So it just support one handle function now.
 * I'll fix it soon.
 * */

var eventBus = {
  //事件队列
  eventList: {},
  
  /**
   * 订阅事件
   * @param eventName {String}
   * @param callback {Function}
   */
  on: function (eventName, callback) {
    this.eventList[eventName] = callback;
  },
  
  /**
   * 发布事件
   * @param eventName {String}
   */
  emit: function (eventName) {
    if (arguments.length < 1) {
      //是否存在事件
      if (this.eventList[eventName]) this.eventList[eventName]();
    } else {
      var params = Array.prototype.slice.call(arguments, 1);
      if (this.eventList[eventName]) {
        this.eventList[eventName].apply(this, params);
      }
    }
  }
};

module.exports = eventBus;