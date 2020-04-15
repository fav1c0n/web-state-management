
export default class Status {
  constructor() {
    this.element = document.querySelector('.js-status');
  }

  notify(model) {
    let self = this;
    let plural = model.items.length !== 1 ? 's' : '';

    self.element.innerHTML = `${model.items.length} tarea${plural}`;
  }
}