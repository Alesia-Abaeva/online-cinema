import { Iitem } from 'src/components/MainPage/mockData';
import { createElem } from 'src/utils/create-element';

export const renderCollectionFilms = (data: Iitem[]) => {
  // TODO: исправить входные данные
  const list: HTMLElement = createElem('div', 'collection__list');

  data.forEach((elem) => {
    const img = createElem('img', 'collection__item__img') as HTMLImageElement;
    img.src = elem.img;
    const item = createElem('a', 'collection__item') as HTMLElement;

    if (elem.rating) {
      const raiting = createElem('span', 'collection__item__raiting') as HTMLElement;
      raiting.innerHTML = elem.rating;
      item.append(raiting);
    }

    item.setAttribute('href', `/films/${elem.id}`);
    item.append(img);
    list.append(item);
  });

  return list;
};
