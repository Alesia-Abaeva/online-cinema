import { createElem } from '../../utils/create-element';
import { Iitem } from '../MainPage/mockData';
import styles from './CollectionPage.module.scss';

export const renderCollection = (data: Iitem[], name: string): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['collection']);
  const wrapper: HTMLElement = createElem('div', 'collection__wrapper');
  const container: HTMLElement = createElem('div', 'collection__container');
  const title: HTMLElement = createElem('h1', 'collection__title');
  const list: HTMLElement = createElem('div', 'collection__list');

  window.scrollTo(0, 0);

  title.innerHTML = name;

  data.forEach((elem) => {
    const img = createElem('img', 'collection__item__img') as HTMLImageElement;
    img.src = elem.img;
    const item = createElem('div', 'collection__item') as HTMLElement;
    if (elem.rating) {
      const raiting = createElem('span', 'collection__item__raiting') as HTMLElement;
      raiting.innerHTML = elem.rating;
      item.append(raiting);
    }

    item.append(img);
    list.append(item);
  });

  container.append(title, list);
  wrapper.append(container);
  mainContent.append(wrapper);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
