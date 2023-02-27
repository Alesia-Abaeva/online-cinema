import { createElem } from 'src/utils/create-element';
import { getMovie } from 'src/api/films';
import { renderBackgroundPlayer } from 'src/components/FilmPage/components/BackgroundPlayer/BackgroundPlayer';
import { getUserFilmReview } from 'src/api/back/review';
import { load } from 'src/utils/load-img';
import { renderLoadingSpinner } from 'src/components/ui/LoadingSpinner/LoadingSpinner';
import { renderTabs } from './components/tabs/tabs';
import { renderAboutFilm } from './components/ContentWrapper/AboutFilm';
import styles from './MainBanner.module.scss';
import { renderDetails } from './components/Details/Details';

export const renderMainBanner = async (movieId: string, isTabs: boolean, type?: string): Promise<HTMLElement> => {
  const mainBanner: HTMLElement = createElem('div', styles.mainBanner);
  const wrapper: HTMLElement = createElem('div', styles.mainBanner__wrapper);
  const container: HTMLElement = createElem('div', styles.mainBanner__container);

  const content: HTMLElement = createElem('div', styles.mainBanner__content);

  const background: HTMLElement = createElem('div', styles.mainBanner__background);
  const loading: HTMLElement = renderLoadingSpinner();
  background.append(loading);
  const backgroundGradient: HTMLElement = createElem('div', styles.mainBanner__background__gradient);
  background.append(backgroundGradient);

  const [res, reviewRes] = await Promise.all([getMovie({ id: movieId }), getUserFilmReview(+movieId)]);

  // render trailer div and timeout trailer
  if (window.screen.width > 1000 && type) {
    setTimeout(() => {
      const trailerDiv: HTMLElement = document.createElement('div');
      trailerDiv.id = type;
      container.append(trailerDiv);
    }, 100);

    setTimeout(() => {
      const mountEl = document.getElementById('main-banner-video') as HTMLElement;
      if (mountEl) {
        renderBackgroundPlayer(res, type, () => () => console.log());
      }
    }, 100);
  }

  const contentWrapper: HTMLElement = renderAboutFilm(res, isTabs, reviewRes.data.review);

  const image = res.backdrop && res.backdrop.url ? res.backdrop.url : res.poster.url;

  load(image)
    .then(() => {
      loading.remove();
      background.style.background = `50% 25% / cover no-repeat url(${image})`;
    })
    .catch((err) => {
      console.log(err);
    });

  container.append(background, content);

  if (isTabs) {
    const tabs: HTMLElement = renderTabs();
    container.append(tabs);

    tabs.addEventListener('click', (event: Event): void => {
      event.stopPropagation();
      const target = event.target as HTMLElement;

      if (target.classList.contains('details')) {
        content.innerHTML = '';
        content.append(renderDetails(res, reviewRes.data.review));
      } else if (target.classList.contains('about-film')) {
        content.innerHTML = '';
        content.append(renderAboutFilm(res, isTabs, reviewRes.data.review));
      }
    });
  }

  content.append(contentWrapper);
  wrapper.append(container);
  mainBanner.append(wrapper);

  return mainBanner;
};
