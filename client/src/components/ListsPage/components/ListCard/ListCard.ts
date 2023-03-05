import { createElem } from 'src/utils/create-element';
import { linkHandler } from 'src/utils/link-handler';
import styles from './ListCard.module.scss';

export const renderListCard = (cardData: ListCard): HTMLElement => {
  const listCard: HTMLElement = createElem('a', styles['list-card']);
  listCard.setAttribute('href', cardData.url);

  listCard.onclick = linkHandler;

  const imgCont: HTMLElement = createElem('div', 'list-card__img-cont');
  const img: HTMLElement = createElem('img', 'list-card__img');
  img.setAttribute('src', cardData.imgUrl);
  imgCont.append(img);
  img.classList.add('skeleton');

  const listInfo: HTMLElement = createElem('div', 'list-card__info');
  const listTitle: HTMLElement = createElem('div', 'list-card__title');
  listTitle.innerHTML = cardData.title;

  const listFilmCount: HTMLElement = createElem('div', 'list-card__films-count');
  listFilmCount.innerHTML = `${cardData.filmsCount} фильмов`;

  listInfo.append(listTitle, listFilmCount);

  listCard.append(imgCont, listInfo);

  return listCard;
};
