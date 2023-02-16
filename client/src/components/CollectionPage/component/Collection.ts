import { paginationState } from 'src/const/default-query-options';
import { createElem } from 'src/utils/create-element';
import { paginate } from 'src/utils/paginate';

export const renderCollectionFilms = (data: FindedMovies[], slices: boolean) => {
  const list: HTMLElement = createElem('div', 'collection__list');

  let renderData = JSON.parse(JSON.stringify(data)) as FindedMovies[];
  console.log(slices);
  if (slices) {
    renderData = paginate(paginationState.page, paginationState.limit, data);
  }

  console.log(renderData);
  renderData.forEach((elem) => {
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
