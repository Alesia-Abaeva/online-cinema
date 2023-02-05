import { renderTabs } from './components/tabs/tabs';
import { renderContentWrapper } from './components/ContentWrapper/ContentWrapper';
import { getMovie } from '../../../../api/films';
import { createElem } from '../../../../utils/create-element';
import styles from './MainBanner.module.scss';

export const renderMainBanner = async (movieId: number): Promise<HTMLElement> => {
  const mainBanner: HTMLElement = createElem('div', styles.mainBanner);
  const wrapper: HTMLElement = createElem('div', styles.mainBanner__wrapper);
  const container: HTMLElement = createElem('div', styles.mainBanner__container);
  const tabs: HTMLElement = renderTabs();
  const content: HTMLElement = createElem('div', styles.mainBanner__content);

  const res: ResponseMovie = await getMovie({ id: movieId }).then((response) => response.data);
  console.log('response ->', res);

  const contentWrapper: HTMLElement = await renderContentWrapper(res);
  container.style.backgroundImage = `url(${res.backdrop?.url})`;

  content.append(contentWrapper);
  wrapper.append(container);
  mainBanner.append(wrapper);
  container.append(content, tabs);

  return mainBanner;
};
