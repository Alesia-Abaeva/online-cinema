import { createElem } from 'src/utils/create-element';
import styles from './MyReviews.module.scss';

export const renderUserReviews = (): HTMLElement => {
  const userReviews: HTMLElement = createElem('div', styles['profile-reviews']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Ваши отзывы';

  userReviews.append(title);

  return userReviews;
};
