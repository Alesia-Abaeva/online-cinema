import { createElem } from 'src/utils/create-element';
import { getPersons } from '../../Handlers/film-data-formaters';
import styles from './Persons.module.scss';

export const renderPersons = (title: string, allPersons: PersonDataApi[], profession: string): HTMLElement => {
  const persons: HTMLElement = createElem('div', 'film-page__persons');
  const personsTitle: HTMLElement = createElem('p', styles['film-page__persons-title']);
  personsTitle.innerHTML = title;
  const personsList: HTMLElement = createElem('ul', 'film-page__persons-list');
  const personsData = getPersons(allPersons, profession, 10);

  personsData.forEach((el) => {
    const actor: HTMLElement = createElem('li', 'film-page__person');
    actor.innerHTML = el;
    personsList.append(actor);
  });

  persons.append(personsTitle, personsList);
  return persons;
};
