import Observable from './observable.js';

export default class Subject extends Observable {
    constructor() {
        super();
        this.items = [];
        if (typeof Subject.instance === 'object') {
            return Subject.instance;
        }

        Subject.instance = this;
        return this;
    }

    increment(item) {
        this.items.push(item);

        // Llama a los suscriptores
        this.notify(this);
    }

    decrement(index) {
        if (index > -1) {
            this.items.splice(index, 1);
        }
        
        // Llama a los suscriptores
        this.notify(this);
    }
}