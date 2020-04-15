import Subject from '../lib/subject.js';

export default class List {

  constructor() {
    this.element = document.querySelector('.js-items');
  }

  notify(model) {

    if(model.items.length === 0) {
      this.element.innerHTML = `<p class="no-items">Aún no has terminado nada &#x1f622;</p>`;
      return;
    }

    this.element.innerHTML = `
      <ul class="app__items">
        ${model.items.map(item => {
          return `
            <li>${item}<button aria-label="Borrar elemento">×</button></li>
          `
        }).join('')}
      </ul>
    `;

    this.element.querySelectorAll('button').forEach((button, index) => {
      button.addEventListener('click', () => {
        const subject = new Subject();
        subject.decrement(index);
      });
    });
  }
};