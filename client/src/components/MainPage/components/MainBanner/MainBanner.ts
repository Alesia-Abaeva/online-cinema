import { createElem } from 'src/utils/create-element';
import { getMovie } from 'src/api/films';
import { renderBackgroundPlayer } from 'src/components/FilmPage/components/BackgroundPlayer/BackgroundPlayer';
import { renderTabs } from './components/tabs/tabs';
import { renderAboutFilm } from './components/ContentWrapper/AboutFilm';
import styles from './MainBanner.module.scss';
import { renderDetails } from './components/Details/Details';

export const renderMainBanner = async (movieId: string, isTabs: boolean, type: string): Promise<HTMLElement> => {
  const mainBanner: HTMLElement = createElem('div', styles.mainBanner);
  const wrapper: HTMLElement = createElem('div', styles.mainBanner__wrapper);
  const container: HTMLElement = createElem('div', styles.mainBanner__container);

  const content: HTMLElement = createElem('div', styles.mainBanner__content);

  const background: HTMLElement = createElem('div', styles.mainBanner__background);
  const backgroundGradient: HTMLElement = createElem('div', styles.mainBanner__background__gradient);
  background.append(backgroundGradient);

  const res: ResponseMovie = await getMovie({ id: movieId });

  // render trailer div and timeout trailer
  if (window.screen.width > 1000) {
    setTimeout(() => {
      const trainerDiv: HTMLElement = document.createElement('div');
      trainerDiv.id = type;
      container.append(trainerDiv);
    }, 100);

    setTimeout(() => {
      renderBackgroundPlayer(res, type, () => () => console.log());
    }, 100);
  }

  const contentWrapper: HTMLElement = renderAboutFilm(res);

  background.style.backgroundImage = `url(${res.backdrop?.url})`;

  container.append(background, content);

  if (isTabs) {
    const tabs: HTMLElement = renderTabs();
    container.append(tabs);

    tabs.addEventListener('click', (event: Event): void => {
      event.stopPropagation();
      const target = event.target as HTMLElement;

      if (target.classList.contains('details')) {
        content.innerHTML = '';
        content.append(renderDetails(res));
      } else if (target.classList.contains('about-film')) {
        content.innerHTML = '';
        content.append(renderAboutFilm(res));
      }
    });
  }

  content.append(contentWrapper);
  wrapper.append(container);
  mainBanner.append(wrapper);

  return mainBanner;
};
