import { createElem } from 'src/utils/create-element';
import styles from './Persons.module.scss';

export const renderPersons = (title: string, personsData: string[]): HTMLElement => {
  const persons: HTMLElement = createElem('div', 'film-page__persons');
  const personsTitle: HTMLElement = createElem('p', styles['film-page__persons-title']);
  personsTitle.innerHTML = title;
  const personsList: HTMLElement = createElem('ul', 'film-page__persons-list');

  personsData.forEach((el) => {
    const actor: HTMLElement = createElem('li', 'film-page__person');
    actor.innerHTML = el;
    if (el && el.startsWith('Еще')) actor.classList.add('gradient-text');
    personsList.append(actor);
  });

  persons.append(personsTitle, personsList);
  return persons;
};
