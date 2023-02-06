import { createElem } from 'src/utils/create-element';
import { renderYouTubePlayer } from '../YouTubePlayer/YouTubePlayer';
import { showCover } from './Handlers/showCover';
import styles from './FilmPage.module.scss';

export const renderFilmPage = (filmData: ResponseMovie): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['film-page']);
  const backdrop: HTMLElement = createElem('div', 'film-page__backdrop');

  const trailer = filmData.videos.trailers;
  if (trailer && trailer.length !== 0) {
    renderYouTubePlayer(
      'video-player',
      `${trailer[0].url}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1`,
      10,
      25,
      showCover(filmData, backdrop),
      showCover(filmData, backdrop)
    );
  }

  // Test: CONTENT GOES HERE \/
  const errorCode: HTMLElement = createElem('h1', 'not-found__error-code');
  errorCode.innerHTML = filmData.name;
  const errorMessage: HTMLElement = createElem('p', 'not-found__message');
  errorMessage.innerHTML = filmData.year.toString();

  mainContent.append(backdrop, errorCode, errorMessage);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
