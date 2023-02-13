import { createBtnInterest } from 'src/components/MainPage/components/MainBanner/components/buttons/buttons';
import { setRatingColor } from 'src/components/ui/RatingColor/RatingColor';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { isFilmInFolder } from 'src/utils/is-film-in-folder';
import styles from './ListItem.module.scss';

export const renderListItem = (itemData: FindedMovies, i: number, page: number, limit: number): HTMLElement => {
  const listItem: HTMLElement = createElem('div', styles['list-item']);
  listItem.dataset.id = itemData.id.toString();

  const listItemLink: HTMLElement = createElem('a', 'list-item__link');
  listItemLink.setAttribute('href', `/films/${itemData.id}`);

  const itemNumCont: HTMLElement = createElem('div', 'list-item__number-cont');
  const itemNum: HTMLElement = createElem('p', 'list-item__number');
  itemNum.innerHTML = ((page - 1) * limit + (i + 1)).toString();
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
  const itemRating: HTMLElement = createElem('p', 'rating');
  itemRating.innerHTML = ratingValue.toFixed(1);
  setRatingColor(itemRating, ratingValue);
  itemRatingCont.append(itemRating);

  const itemControls: HTMLElement = createElem('div', 'list-item__controls');
  const moreActions: HTMLElement = createBtnInterest(itemData.id);

  itemControls.append(moreActions);

  listItemLink.append(itemNumCont, itemImgCont, itemInfo, itemRatingCont);
  listItem.append(listItemLink, itemControls);

  store.subscribe(() => {
    const listItemCont = document.querySelector('.list-content__list-items');
    if (listItemCont instanceof HTMLElement) {
      const items = Array.from(listItemCont.children) as HTMLElement[];

      items.forEach((el) => {
        const { id } = el.dataset;
        if (id && isFilmInFolder(+id, 'watched')) {
          el.classList.add('list-item_active');
        } else {
          el.classList.remove('list-item_active');
        }
      });
    }
  });

  return listItem;
};
