import { createElem } from 'src/utils/create-element';
import { renderPagination } from '../ui/Pagination/Pagination';
import styles from './CollectionPage.module.scss';
import { renderCollectionFilms } from './component/Collection';
import { updateCollectionPageUI } from './updateCollectionPageUI';

export const renderCollection = (data: FindedMovies[], name: string, paginate: boolean): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['collection']);
  const wrapper: HTMLElement = createElem('div', 'collection__wrapper');
  const container: HTMLElement = createElem('div', 'collection__container');
  const title: HTMLElement = createElem('h1', 'collection__title');

  name && (title.innerHTML = name);
  const listCont = createElem('div', 'collection__list-container');
  listCont.id = 'list-container';
  const list: HTMLElement = renderCollectionFilms(data, paginate);

  window.scrollTo(0, 0);
  container.append(title, listCont);
  if (paginate) {
    const pagination = renderPagination(() => updateCollectionPageUI(data), false);
    container.append(pagination);
  }

  listCont.append(list);
  wrapper.append(container);
  mainContent.append(wrapper);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
