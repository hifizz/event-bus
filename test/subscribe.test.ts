import { Subject, Observer } from '../src/Subscribe';

const sub = new Subject();
const obr1 = new Observer('obr1');
const obr2 = new Observer('obr2');



describe('Subscribe', () => {
  beforeEach(() => {
    sub.observers = [];
  });

  describe('Subject class', () => {
    it('have subsribe function', () => {
      expect(sub).toHaveProperty('subscribe');
      expect(sub.subscribe).toBeInstanceOf(Function);
    });

    it('have unSubscribe function', () => {
      expect(sub).toHaveProperty('unSubscribe');
      expect(sub.unSubscribe).toBeInstanceOf(Function);
    });
    it('have notify function', () => {
      expect(sub).toHaveProperty('notify');
      expect(sub.notify).toBeInstanceOf(Function);
    });

  });

  describe('Observer class', () => {
    it('have update function', () => {
      expect(obr1).toHaveProperty('update');
      expect(obr1.update).toBeInstanceOf(Function);
    })
  });

  describe('subscribe event', () => {
    it('subject should have observers after subscribe', () => {
      sub.subscribe(obr1);
      sub.subscribe(obr2);
      expect(sub.observers.length).toBe(2);
      expect(sub.observers).toContainEqual(obr1);
      expect(sub.observers).toContainEqual(obr2);
    });
  });

  describe('unSubscribe event', () => {
    it('subject should not have observers after unSubscribe', () => {
      sub.subscribe(obr1);
      sub.subscribe(obr2);
      sub.unSubscribe(obr2);

      expect(sub.observers.length).toBe(1);
      expect(sub.observers).toContainEqual(obr1);
      expect(sub.observers).not.toContainEqual(obr2);
    })
  });

  describe('notify observer', () => {

    it('observer should update after subject notify', () => {
      sub.subscribe(obr1);
      sub.subscribe(obr2);
      sub.notify();
      expect(obr1.update).toBeCalled;
      expect(obr2.update).toBeCalled;
    })
  });

})
