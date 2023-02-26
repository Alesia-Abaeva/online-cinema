import { getUserReviews } from 'src/api/back/review';
import { renderReviewCard } from 'src/components/FilmPage/components/ReviewCard/ReviewCard';
import { createElem } from 'src/utils/create-element';
import styles from './MyReviews.module.scss';

export const renderUserReviews = (): HTMLElement => {
  const userReviews: HTMLElement = createElem('div', styles['profile-reviews']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Ваши отзывы';

  const dataCont: HTMLElement = createElem('div', 'profile-info__data');
  dataCont.classList.add('profile-reviews__wrapper');
  userReviews.append(title, dataCont);

  getUserReviews()
    .then((res) => {
      console.log(res);
      const { reviews, user } = res.data;
      if (reviews && user && reviews.length > 0) {
        reviews.forEach((el) => {
          const reviewCard: HTMLElement = renderReviewCard(el, user);
          dataCont.append(reviewCard);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return userReviews;
};
