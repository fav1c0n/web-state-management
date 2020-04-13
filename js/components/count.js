import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Count extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.js-count')
    });
  }

  render() {
    let plural = store.state.items.length !== 1 ? 's' : '';
    let emoji = store.state.items.length > 0 ? '&#x1f64c;' : '&#x1f622;';

    this.element.innerHTML = `
      <small>Has hecho</small>
      ${store.state.items.length}
      <small>tarea${plural} hoy ${emoji}</small>
    `;
  }
}