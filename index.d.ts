declare module "fizz-event-bus" {
    export const eventBus: eventBus;
}

type Handler = (param?: any) => void;

interface eventBus {
    on(type: string, handler: Handler): void;

    emit(type: string, params?: any): void;

    off(type: string, handler?: Handler): void;
}
