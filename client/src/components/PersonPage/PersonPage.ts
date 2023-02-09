import { createElem } from 'src/utils/create-element';
import { renderPersonDataTable } from './components/PersonDataTable/PersonDataTable';
import { renderPersonsFilms } from './components/PersonsFilms/PersonsFilms';
import { getPersonsBestMovies } from './Handlers/person-data-formaters';
import styles from './PersonPage.module.scss';

export const renderPersonPage = (personData: ResponsePerson): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  mainContainer.classList.add('main__container_p');
  const mainContent: HTMLElement = createElem('div', styles['person-page']);
  mainContent.classList.add('id-page');

  const personPhoto: HTMLElement = createElem('img', 'id-page__poster');
  const url = `${
    personData.photo
      ? personData.photo
      : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
  }`;
  personPhoto.setAttribute('src', url);

  const personDescription: HTMLElement = createElem('div', 'id-page__description');
  const personHeader: HTMLElement = createElem('div', 'id-page__header');
  const personTitle: HTMLElement = createElem('h1', 'id-page__title');

  personTitle.innerHTML = personData.name;

  const personEnTitle: HTMLElement = createElem('div', 'id-page__sub-title');
  personEnTitle.innerHTML = personData.enName ? `${personData.enName}` : '';

  personHeader.append(personTitle, personEnTitle);

  const personAbout: HTMLElement = renderPersonDataTable(personData);
  personDescription.append(personHeader, personAbout);

  const personMovies = createElem('div', 'id-page__desc-aside');

  const movies = getPersonsBestMovies(personData.movies);
  if (movies.length !== 0) {
    const actorsSection = renderPersonsFilms('Лучшие фильмы:', movies);
    personMovies.append(actorsSection);
  }

  mainContent.append(personPhoto, personDescription, personMovies);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
