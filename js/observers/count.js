
export default class Count {
  constructor() {
    this.element = document.querySelector('.js-count')
  }

  notify(model) {

    let plural = model.items.length !== 1 ? 's' : '';
    let emoji = model.items.length > 0 ? '&#x1f64c;' : '&#x1f622;';

    this.element.innerHTML = `
      <small>Has hecho</small>
      ${model.items.length}
      <small>tarea${plural} hoy ${emoji}</small>
    `;
  }
}