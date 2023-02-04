import { getMovie } from '../../../../api/films';
import { createElem } from '../../../../utils/create-element';
import styles from './MainBanner.module.scss';

export const renderMainBanner = async (movieId: number): Promise<HTMLElement> => {
  const mainBanner: HTMLElement = createElem('div', styles.mainBanner);
  const wrapper: HTMLElement = createElem('div', styles.mainBanner__wrapper);
  const container: HTMLElement = createElem('div', styles.mainBanner__container);
  const background: HTMLElement = createElem('div', styles.mainBanner__background);
  const content: HTMLElement = createElem('div', styles.mainBanner__content);
  const tabs: HTMLElement = createElem('div', styles.mainBanner__tabs);
  wrapper.append(container);
  mainBanner.append(wrapper);

  const res: ResponseMovie = await getMovie({ id: movieId }).then((response) => response.data);

  const description = res.shortDescription ? res.shortDescription : res.description;
  const title = res.logo.url ? `<img src="${res.logo.url}" alt="${res.name}" />` : res.name;

  const contentTemplate = `
  <div class="mainBanner__content__title">
      <h1>${title}</h1>
  </div>
  <div class="mainBanner__content__body">
      <div class="mainBanner__content__meta"></div>
      <div class="mainBanner__content__short-description">${description}</div>
      <div class="mainBanner__content__actions"></div>
  </div>
`;

  content.innerHTML = contentTemplate;
  background.style.background = `url(${res.backdrop?.url})`;
  container.append(background, content, tabs);

  return mainBanner;
};
