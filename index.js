import Count from './js/observers/count.js';
import List from './js/observers/list.js';
import Status from './js/observers/status.js';
import Subject from './js/lib/subject.js';

const subject = new Subject();
const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('#new-item-field');

formElement.addEventListener('submit', evt => {
  evt.preventDefault();

  let value = inputElement.value.trim();

  if(value.length) {
    subject.increment(value);
    inputElement.value = '';
    inputElement.focus();
  }
});

subject.subscribe(new Count());
subject.subscribe(new List());
subject.subscribe(new Status());
