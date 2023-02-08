import { createElem } from 'src/utils/create-element';
import { renderPopover } from '../Popover/Popover';
import styles from './Persons.module.scss';

export const renderPersons = (title: string, personsData: PersonDataApi[]): HTMLElement => {
  const persons: HTMLElement = createElem('div', 'film-page__persons');
  const personsTitle: HTMLElement = createElem('p', styles['film-page__persons-title']);
  personsTitle.innerHTML = title;
  const personsList: HTMLElement = createElem('ul', 'film-page__persons-list');

  const shortData = personsData.slice(0, 10);

  shortData.forEach((el) => {
    if (el.name) {
      const actor: HTMLElement = createElem('li', 'film-page__person');
      const popoverWrapper: HTMLElement = createElem('div', 'popover__wrapper');
      const actorLink = createElem('a', 'film-page__person_link') as HTMLLinkElement;
      actorLink.setAttribute('href', `/person/${el.id}`);
      actorLink.dataset.personId = el.id.toString();
      actorLink.innerHTML = el.name;

      const popover: HTMLElement = renderPopover(el);

      popoverWrapper.append(actorLink, popover);

      actor.append(popoverWrapper);
      personsList.append(actor);
    }
  });

  if (personsData.length > 10) {
    const more: HTMLElement = createElem('li', 'film-page__person');
    more.classList.add('gradient-text');
    more.innerHTML = `Eщe ${personsData.length - 10}`;
    personsList.append(more);
  }

  persons.append(personsTitle, personsList);
  return persons;
};
