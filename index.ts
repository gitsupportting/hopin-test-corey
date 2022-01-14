type Handler = (arg1: string, arg2: string) => void
const handlers: Record<string, Handler[]> = {}

const trigger = (type: string) => {
    handlers[type].forEach((cb) => cb('1', '2'))
}

const on = (type: string, handler: Handler) => {
    if (handlers[type])  {
        handlers[type] = [handler];
    } else {
        handlers[type].push(handler);
    }
}

const off = (type: string, handler: Handler) => {
    handlers[type].filter((cb) => cb !== handler);
}


// class assessment
class EventEmitter {
    handlers: Record<string, Handler[]>;

    constructor() {
        this.handlers = {};
    }

    on(type: string, handler: Handler) {
        if (this.handlers[type])  {
            this.handlers[type] = [handler];
        } else {
            this.handlers[type].push(handler);
        }
    }

    off(type: string, handler: Handler) {
        this.handlers[type].filter((cb) => cb !== handler);
    }

    trigger(type: string, arg1: string, arg2: string) {
        this.handlers[type].forEach((cb) => cb(arg1, arg2))
    }
}