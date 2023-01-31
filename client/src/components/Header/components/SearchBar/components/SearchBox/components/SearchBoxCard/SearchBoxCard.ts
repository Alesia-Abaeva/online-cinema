import { createElem } from '../../../../../../../../utils/create-element';
import { createLink } from '../../../../../../../../utils/create-link-element';
import styles from './SearchBoxCard.module.scss';

export const renderSearchBoxCard = (cardData: FindedMovies): HTMLElement => {
  const searchCard: HTMLElement = createLink(`/films/${cardData.id}`, styles['search-box__card'], false, '');
  const cardPosterCont: HTMLElement = createElem('div', 'search-box__card-poster-cont');
  const cardPosterImg: HTMLElement = createElem('img', 'search-box__card-poster');
  const url = `${
    cardData.poster
      ? cardData.poster.previewUrl
      : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
  }`;
  cardPosterImg.setAttribute('src', url);

  cardPosterCont.append(cardPosterImg);

  const cardInfo: HTMLElement = createElem('div', 'search-box__card-info');
  const filmTitle: HTMLElement = createElem('div', 'search-box__card-title');
  filmTitle.innerHTML = cardData.name;

  const filmSpecs: HTMLElement = createElem('div', 'search-box__card-specs');

  const filmRating: HTMLElement = createElem('div', 'search-box__card-rating');
  filmRating.innerHTML = cardData.rating.kp.toFixed(1);

  const filmYear: HTMLElement = createElem('div', 'search-box__card-year');
  const year = cardData.year ? cardData.year.toString() : 'N/A';
  filmYear.innerHTML = year;

  filmSpecs.append(filmRating, filmYear);
  cardInfo.append(filmTitle, filmSpecs);
  searchCard.append(cardPosterCont, cardInfo);

  return searchCard;
};
