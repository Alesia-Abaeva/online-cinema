import { createElem } from 'src/utils/create-element';
import { getMovie } from 'src/api/films';
import { renderTabs } from './components/tabs/tabs';
import { renderAboutFilm } from './components/ContentWrapper/AboutFilm';
import styles from './MainBanner.module.scss';
import { renderDetails } from './components/Details/Details';

export const renderMainBanner = async (movieId: number): Promise<HTMLElement> => {
  const mainBanner: HTMLElement = createElem('div', styles.mainBanner);
  const wrapper: HTMLElement = createElem('div', styles.mainBanner__wrapper);
  const container: HTMLElement = createElem('div', styles.mainBanner__container);
  const tabs: HTMLElement = renderTabs();
  const content: HTMLElement = createElem('div', styles.mainBanner__content);

  const background: HTMLElement = createElem('div', styles.mainBanner__background);
  const backgroundGradient: HTMLElement = createElem('div', styles.mainBanner__background__gradient);
  background.append(backgroundGradient);

  const res: ResponseMovie = await getMovie({ id: movieId });

  const contentWrapper: HTMLElement = renderAboutFilm(res);

  background.style.backgroundImage = `url(${res.backdrop?.url})`;
  background.append(content, tabs);
  container.append(background);
  content.append(contentWrapper);
  wrapper.append(container);
  mainBanner.append(wrapper);

  tabs.addEventListener('click', (event: Event): void => {
    event.stopPropagation();
    console.log('click');
    const target = event.target as HTMLElement;

    if (target.classList.contains('details')) {
      console.log('click');
      content.innerHTML = '';
      content.append(renderDetails(res));
    } else if (target.classList.contains('about-film')) {
      console.log('click');
      content.innerHTML = '';
      content.append(renderAboutFilm(res));
    }
  });

  return mainBanner;
};
