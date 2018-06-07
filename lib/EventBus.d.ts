export declare type Handler = (param?: any) => void;
export interface eventList {
    [key: string]: Array<Handler>;
}
export declare class EventBus {
    eventList: eventList;
    /**
     * 订阅事件
     * @param eventName {String}
     * @param handler {Function}
     */
    on(eventName: string, handler: Handler): void;
    /**
     * 发布事件
     * 第一位参数必须为eventName，可以传多个参数。
     * 第二位及之后的参数都将传给 handle
     * @param eventName {String}
     * @param params {any}
     */
    emit(eventName: string, ...params: any[]): void | boolean;
    /**
     * 移除订阅事件
     * 只传入 eventName, 则移除该事件下所有的 handle
     * 传入 eventName 同时传入 callback, 则单独移除这个Callback
     * @param eventName
     * @param callback
     * @returns {boolean|void} 当事件不存在的时候，返回false，其他情况皆不返回
     */
    off(eventName: string, handler?: Handler): boolean | void;
}
