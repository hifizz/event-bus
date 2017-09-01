var eventBus = {
  // 事件队列
  eventList: {},
  
  /**
   * 订阅事件
   * @param eventName {String}
   * @param callback {Function}
   */
  on: function (eventName, callback) {
    if (!this.eventList[eventName]) {
      this.eventList[eventName] = [];
    }
    this.eventList[eventName].push(callback);
  },
  
  /**
   * 发布事件
   * 第一位参数必须为eventName，可以传多个参数。
   * 第二位及之后的参数都将传给 handle
   * @param eventName {String}
   */
  emit: function (eventName) {
    var handles = this.eventList[eventName];
    if (!handles || handles.length === 0) {
      return false;
    }
    else {
      var argus = Array.prototype.slice.call(arguments, 1);
      var len = handles.length;
      for (var i = 0; i < len; i++) {
        handles[i].apply(this, argus);
      }
    }
  },
  
  /**
   * 移除订阅事件
   * 只传入 eventName, 则移除该事件下所有的 handle
   * 传入 eventName 同时传入 callback, 则单独移除这个Callback
   * @param eventName
   * @param callback
   * @return {boolean}
   */
  off: function (eventName, callback) {
    var handles = this.eventList[eventName];
    if (!handles || handles.length === 0) {
      return false;
    }
    else if(!callback) {
      this.eventList[eventName].length = 0;
    }
    else {
      for(var i = handles.length -1; i >= 0; i--) {
        if(handles[i] === callback) {
          handles.splice(i, 1);
        }
      }
    }
  }
};

module.exports = eventBus;