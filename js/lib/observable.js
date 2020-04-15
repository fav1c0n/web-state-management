
export default class Observable {
  constructor() {
      this.observers = [];
  }

  // Suscribe una clase notificadora
  subscribe(a) {
      this.observers.push(a);
  }

  // Desuscribe la clase notificadora
  unsubscribe(a) {
      this.observers = this.observers.filter(observer => observer instanceof a !== true);
  }

  // Llama a todos nuestros suscriptores
  notify(model) {
      this.observers.forEach(observer => {
          observer.notify(model);
      });
  }
}