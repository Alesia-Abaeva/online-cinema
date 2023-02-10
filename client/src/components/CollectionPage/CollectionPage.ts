import { createElem } from 'src/utils/create-element';
import { Iitem } from '../MainPage/mockData';
import styles from './CollectionPage.module.scss';
import { renderCollectionFilms } from './component/Collection';

export const renderCollection = (data: Iitem[], name?: string): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['collection']);
  const wrapper: HTMLElement = createElem('div', 'collection__wrapper');
  const container: HTMLElement = createElem('div', 'collection__container');
  const title: HTMLElement = createElem('h1', 'collection__title');
  const list: HTMLElement = renderCollectionFilms(data);

  window.scrollTo(0, 0);

  name && (title.innerHTML = name);

  container.append(title, list);
  wrapper.append(container);
  mainContent.append(wrapper);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
