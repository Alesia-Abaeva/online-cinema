import { setRatingColor } from 'src/components/ui/RatingColor/RatingColor';
import { createElem } from 'src/utils/create-element';

export const renderRating = (rating: number): HTMLElement => {
  const itemRatingCont: HTMLElement = createElem('div', 'id-page__rating-cont');
  const itemRating: HTMLElement = createElem('p', 'rating');
  itemRating.classList.add('rating_bg');
  itemRating.innerHTML = rating.toFixed(1);

  setRatingColor(itemRating, rating, 'text');
  itemRatingCont.append(itemRating);
  return itemRatingCont;
};
