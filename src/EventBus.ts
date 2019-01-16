export type Handler = (param?: any) => void;
export type IEventName = string | number;

export interface eventList {
  [key: string]: Array<Handler>;
}

export class EventBus {
  // 事件列表
  eventList: eventList = {};

  /**
   * 订阅事件
   * @param eventName {String}
   * @param handler {Function}
   */
  on(eventName: IEventName, handler: Handler) {
    if (!this.eventList[eventName]) {
      this.eventList[eventName] = [];
    }
    this.eventList[eventName].push(handler);
  }

  /**
   * 发布事件
   * 第一位参数必须为eventName，可以传多个参数。
   * 第二位及之后的参数都将传给 handle
   * @param eventName {String}
   * @param params {any}
   */
  emit(eventName: IEventName, ...params: any[]): void | boolean {
    const handlers = this.eventList[eventName];
    if (!handlers || handlers.length === 0) {
      return false;
    } else {
      for (let handler of handlers) {
        handler(...params as any);
      }
    }
  }

  /**
   * 移除订阅事件
   * 只传入 eventName, 则移除该事件下所有的 handle
   * 传入 eventName 同时传入 callback, 则单独移除这个Callback
   * @param eventName
   * @param callback
   * @returns {boolean|void} 当事件不存在的时候，返回false，其他情况皆不返回
   */
  off(eventName: IEventName, handler?: Handler): boolean | void {
    const handlers = this.eventList[eventName];
    if (!handlers || handlers.length === 0) {
      return false;
    } else if (!handler) {
      this.eventList[eventName].length = 0;
    } else {
      for (let i = handlers.length - 1; i >= 0; i--) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
        }
      }
    }
  }
}
