import eventBus from '../src/index'

describe("eventBus", () => {
  describe("on", () => {
    beforeEach(() => {
      eventBus.eventList = {};
    });

    it("should hava on method", () => {
      expect(eventBus).toHaveProperty("on");
      expect(eventBus.on).toBeInstanceOf(Function);
    });

    it("should register a callback", () => {
      const fn1 = jest.fn();
      eventBus.on("foo", fn1);
      expect(eventBus.eventList).toHaveProperty("foo");
      expect(eventBus.eventList.foo).toEqual([fn1]);
    });

    it("should register handlers for any strings", () => {
      const fn1 = jest.fn();
      const fn2 = jest.fn();
      const fn3 = jest.fn();
      eventBus.on("delete", fn1);
      eventBus.on(":90098089--", fn2);
      eventBus.on("default", fn3);
      expect(eventBus.eventList["delete"]).toContain(fn1);
      expect(eventBus.eventList[":90098089--"]).toContain(fn2);
      expect(eventBus.eventList["default"]).toContain(fn3);
    });

    it("should support append multi handlers for one event", () => {
      const fn1 = jest.fn();
      eventBus.on("foo", () => {});
      eventBus.on("foo", fn1);
      eventBus.on("foo", fn1);
      eventBus.on("foo", fn1);
      expect(eventBus.eventList.foo.length).toBe(4);
    });
  });

  describe("emit", () => {
    beforeEach(() => {
      eventBus.eventList = {};
    });

    it("should have emit method", () => {
      expect(eventBus).toHaveProperty("emit");
      expect(eventBus.emit).toBeInstanceOf(Function);
    });

    it("should call handler by eventName", () => {
      const fn1 = jest.fn();
      eventBus.on("foo", fn1);
      eventBus.emit("foo");
      expect(fn1).toHaveBeenCalled();
      expect(fn1).toHaveBeenCalledTimes(1);
      eventBus.emit("foo");
      expect(fn1).toHaveBeenCalledTimes(2);
    });

    it("should support call handler by eventName with params", () => {
      const fn1 = jest.fn();
      eventBus.on("foo", fn1);
      eventBus.emit("foo", "bar");
      expect(fn1).toHaveBeenCalled();
      expect(fn1).toHaveBeenCalledWith("bar");
      eventBus.emit("foo", "bar", "abc");
      expect(fn1).toHaveBeenCalledWith("bar", "abc");
      expect(fn1).toHaveBeenLastCalledWith("bar", "abc");
    });

    it("should call all handlers by eventName", () => {
      const fn1 = jest.fn();
      const fn2 = jest.fn();
      const fn3 = jest.fn();
      const fn4 = jest.fn();
      eventBus.on("foo", fn1);
      eventBus.on("foo", fn2);
      eventBus.on("foo", fn3);
      eventBus.on("foo", fn4);

      eventBus.emit("foo", "bar");

      expect(fn1).toBeCalledWith("bar");
      expect(fn2).toBeCalledWith("bar");
      expect(fn3).toBeCalledWith("bar");
      expect(fn4).toBeCalledWith("bar");
    });
  });

  describe("off", () => {
    let fn1: jest.EmptyFunction, fn2: jest.EmptyFunction, fn3: jest.EmptyFunction;

    beforeEach(() => {
      fn1 = jest.fn();
      fn2 = jest.fn();
      fn3 = jest.fn();
      eventBus.on("foo", fn1);
      eventBus.on("foo", fn2);
      eventBus.on("foo", fn3);
      eventBus.emit("foo", "bar");
    });

    it("should have off method", () => {
      expect(eventBus).toHaveProperty("off");
      expect(eventBus.off).toBeInstanceOf(Function);
    });

    it("should remove all handlers by eventName", () => {
      eventBus.off("foo");
      expect(eventBus.eventList.foo).toEqual([]);
    });

    it("should remove a handler by eventName with handler param", () => {
      eventBus.off("foo", fn1);
      expect(eventBus.eventList.foo).not.toContain(fn1);
      eventBus.off("foo", fn3);
      expect(eventBus.eventList.foo).not.toContain(fn3);
      expect(eventBus.eventList).toHaveProperty("foo");
      expect(eventBus.eventList["foo"]).toContain(fn2);
    });
  });
});
