import { createElem } from 'src/utils/create-element';
import YouTubePlayer from 'youtube-player';
import styles from './FilmPage.module.scss';

export const renderFilmPage = (filmData: ResponseMovie): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['film-page']);
  console.log(filmData);

  const backdrop: HTMLElement = createElem('div', 'film-page__backdrop');

  // TODO: refactor
  const trailer = filmData.videos.trailers;
  if (trailer && trailer.length !== 0) {
    const player = YouTubePlayer('video-player', {
      playerVars: { autoplay: 1, controls: 0 },
    });

    player.loadVideoByUrl({
      mediaContentUrl: `${trailer[0].url}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1`,
      startSeconds: 10,
      endSeconds: 25,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    player.on('ready', (e: any) => {
      const iframe = document.getElementById('video-player') as HTMLIFrameElement;
      iframe.style.display = 'block';
      e.target.mute();
      e.target.playVideo();
    });

    // If there is a problem playing the video
    let counter = 0;
    player.on('error', () => {
      counter++;
      if (counter > 2) {
        player.destroy();
        if (filmData.backdrop) {
          backdrop.classList.add('film-page__backdrop_img');
          // linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          backdrop.style.background = `top / cover no-repeat url(${filmData.backdrop.url})`;
        }
      }
      console.log('something is wrong', counter);
    });

    // On video end delete
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    player.on('stateChange', (e: any) => {
      if (e.data === 0) {
        player.destroy();
        if (filmData.backdrop) {
          backdrop.classList.add('film-page__backdrop_img');
          // linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
          backdrop.style.background = `top / cover no-repeat url(${filmData.backdrop.url})`;
        }
      }
    });
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
