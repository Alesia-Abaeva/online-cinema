import { createElem } from 'src/utils/create-element';

export const renderCollectionFilms = (data: FindedMovies[]) => {
  const list: HTMLElement = createElem('div', 'collection__list');

  data.forEach((elem) => {
    const img = createElem('img', 'collection__item__img') as HTMLImageElement;
    const url = `${
      elem.poster
        ? elem.poster.previewUrl
        : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    img.src = url;
    const item = createElem('a', 'collection__item') as HTMLElement;

    if (elem.rating.kp) {
      const raiting = createElem('span', 'collection__item__raiting') as HTMLElement;
      raiting.innerHTML = elem.rating.kp ? elem.rating.kp.toFixed(1) : '';
      item.append(raiting);
    }

    item.setAttribute('href', `/films/${elem.id}`);
    item.append(img);
    list.append(item);
  });

  return list;
};
