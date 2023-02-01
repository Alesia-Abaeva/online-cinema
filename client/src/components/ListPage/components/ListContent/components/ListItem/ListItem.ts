import { createButton } from 'src/components/ui/Button/Button';
import { paginaitonState } from 'src/const/default-query-options';
import { createElem } from 'src/utils/create-element';
import styles from './ListItem.module.scss';

export const renderListItem = (itemData: FindedMovies, i: number): HTMLElement => {
  const listItem: HTMLElement = createElem('a', styles['list-item']);
  listItem.setAttribute('href', `/films/${itemData.id}`);

  const itemNumCont: HTMLElement = createElem('div', 'list-item__number-cont');
  const itemNum: HTMLElement = createElem('p', 'list-item__number');
  itemNum.innerHTML = ((paginaitonState.page - 1) * paginaitonState.limit + (i + 1)).toString();
  itemNumCont.append(itemNum);

  const itemImgCont: HTMLElement = createElem('div', 'list-item__img-cont');
  const itemImg: HTMLElement = createElem('img', 'list-item__img');
  const url = `${
    itemData.poster
      ? itemData.poster.previewUrl
      : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
  }`;
  itemImg.setAttribute('src', url);
  itemImgCont.append(itemImg);

  const itemInfo: HTMLElement = createElem('div', 'list-item__info');

  const filmTitle: HTMLElement = createElem('div', 'list-item__title');
  filmTitle.innerHTML = itemData.name;

  const origNameYearLength: HTMLElement = createElem('div', 'list-item__description');
  const enName = itemData.alternativeName ? `${itemData.alternativeName}, ` : '';
  const year = itemData.year ? `${itemData.year}, ` : '';
  const length = itemData.movieLength ? `${itemData.movieLength}&#160;мин` : '';
  origNameYearLength.innerHTML = `${enName}${year}${length}`;

  const countryGenreDirecror: HTMLElement = createElem('div', 'list-item__description_secondary');
  countryGenreDirecror.innerHTML = `${itemData.shortDescription || ''}`;

  itemInfo.append(filmTitle, origNameYearLength, countryGenreDirecror);

  const ratingValue = itemData.rating.kp;
  const itemRatingCont: HTMLElement = createElem('div', 'list-item__rating-cont');
  const itemRating: HTMLElement = createElem('p', 'list-item__rating');
  itemRating.innerHTML = ratingValue.toFixed(1);
  if (ratingValue > 5) itemRating.classList.add('list-item__rating_good');
  if (ratingValue > 9) itemRating.classList.add('list-item__rating_amazing');
  itemRatingCont.append(itemRating);

  const itemControls: HTMLElement = createElem('div', 'list-item__controls');
  const wantToWatchBtn: HTMLElement = createButton('Буду смотреть', undefined, 'list-item__btn');
  const addToFavBtn: HTMLElement = createButton('•••', undefined, 'list-item__btn');
  const moreActions: HTMLElement = createButton('•••', undefined, 'list-item__btn');

  itemControls.append(wantToWatchBtn, addToFavBtn, moreActions);

  listItem.append(itemNumCont, itemImgCont, itemInfo, itemRatingCont, itemControls);

  return listItem;
};
