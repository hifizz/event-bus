// 手写实现观察者模式
class Subject {
  observers: Array<Observer>;
  constructor() {
    this.observers = [];
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unSubscribe(observer: Observer) {
    this.observers = this.observers.filter((observerItem: Observer) => {
      return observerItem !== observer;
    })
  }

  notify() {
    this.observers.forEach((observerItem: Observer) => {
      observerItem.update();
    })
  }
}

class Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  update() {
    console.log('my name is ' + this.name);
  }
}

export {
  Subject,
  Observer
}
