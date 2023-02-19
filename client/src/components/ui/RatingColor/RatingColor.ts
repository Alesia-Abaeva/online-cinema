import styles from './RatingColor.module.scss';

export const setRatingColor = (ratingElem: HTMLElement, rating: number, type: string): HTMLElement => {
  let ratingType = 'rating';
  if (type === 'background') ratingType = 'rating-bg';

  if (rating > 9) ratingElem.classList.add(styles[`${ratingType}_amazing`]);
  else if (rating > 7) ratingElem.classList.add(`${ratingType}_good`);
  else if (rating > 5) ratingElem.classList.add(`${ratingType}_ok`);
  else if (rating < 5) ratingElem.classList.add(`${ratingType}_bad`);

  return ratingElem;
};
