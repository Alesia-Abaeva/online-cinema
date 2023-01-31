import { createElem } from 'src/utils/create-element';
import styles from './FilmPage.module.scss';

export const renderFilmPage = (filmData: ResponseMovie): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['film-page']);

  // Test: CONTENT GOES HERE \/
  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = `${filmData.name}`;

  mainContent.append(header);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
