import styles from './RatingColor.module.scss';

export const setRatingColor = (ratingElem: HTMLElement, rating: number): HTMLElement => {
  if (rating > 9) ratingElem.classList.add(styles['rating_amazing']);
  else if (rating > 7) ratingElem.classList.add('rating_good');
  else if (rating > 5) ratingElem.classList.add('rating_ok');
  else if (rating < 5) ratingElem.classList.add('rating_bad');

  return ratingElem;
};
