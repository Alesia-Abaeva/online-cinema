import { createElem } from 'src/utils/create-element';
import styles from './FilmPage.module.scss';

export const renderFilmPage = (filmData: ResponseMovie): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['film-page']);

  // Test: CONTENT GOES HERE \/
  const errorCode: HTMLElement = createElem('h1', 'not-found__error-code');
  errorCode.innerHTML = filmData.name;
  const errorMessage: HTMLElement = createElem('p', 'not-found__message');
  errorMessage.innerHTML = filmData.year.toString();

  mainContent.append(errorCode, errorMessage);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
