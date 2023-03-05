import { createElem } from 'src/utils/create-element';

export const renderPersonsFilms = (title: string, filmsData: MoviesPerson[]): HTMLElement => {
  const persons: HTMLElement = createElem('div', 'id-page__persons');
  const personsTitle: HTMLElement = createElem('p', 'id-page__persons-title');
  personsTitle.innerHTML = title;
  const personsList: HTMLElement = createElem('ul', 'id-page__persons-list');

  const shortData = filmsData.slice(0, 10);

  shortData.forEach((el) => {
    if (el.name) {
      const actor: HTMLElement = createElem('li', 'id-page__person');
      const actorLink = createElem('a', 'id-page__person_link') as HTMLLinkElement;
      actorLink.setAttribute('href', `/films/${el.id}`);
      actorLink.dataset.personId = el.id.toString();
      actorLink.innerHTML = el.name;

      actor.append(actorLink);
      personsList.append(actor);
    }
  });

  if (filmsData.length > 10) {
    const more: HTMLElement = createElem('li', 'id-page__person');
    more.classList.add('gradient-text');
    more.innerHTML = `Eщe ${filmsData.length - 10}`;
    personsList.append(more);
  }

  persons.append(personsTitle, personsList);
  return persons;
};
