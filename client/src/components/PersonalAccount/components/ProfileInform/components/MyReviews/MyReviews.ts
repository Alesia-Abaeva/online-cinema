import { getUserReviews } from 'src/api/back/review';
import { createButton } from 'src/components/ui/Button/Button';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { renderUserWatchEmpty } from '../UserWatch/UserWatch';
import { renderReviewSlice } from './Handlers/renderReviewSlice';
import styles from './MyReviews.module.scss';

export const renderUserReviews = (): HTMLElement => {
  const userReviews: HTMLElement = createElem('div', styles['profile-reviews']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Ваши отзывы';

  const dataCont: HTMLElement = createElem('div', 'profile-info__data');
  dataCont.classList.add('profile-reviews__wrapper');

  const reviewsGrid: HTMLElement = createElem('div', 'reviews');

  const showMore: HTMLElement = createButton('Показать еще', undefined, 'reviews__show-more');

  userReviews.append(title);

  const user = store.getState().user.personal.data;
  let page = 1;
  getUserReviews(page)
    .then((res) => {
      const { reviews } = res.data;
      if (reviews && reviews.docs && user && reviews.docs.length > 0) {
        renderReviewSlice(reviewsGrid, showMore, reviews, user, page);
        dataCont.append(reviewsGrid, showMore);
        userReviews.append(dataCont);
      } else {
        const emptyMes: HTMLElement = renderUserWatchEmpty('Оставить отзыв можно на странице фильма');
        userReviews.append(emptyMes);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  showMore.onclick = async () => {
    page++;
    const moreRes = await getUserReviews(page);
    const moreReviews = moreRes.data.reviews;

    if (moreReviews && moreReviews.docs && user && moreReviews.docs.length > 0) {
      renderReviewSlice(reviewsGrid, showMore, moreReviews, user, page);
    }
  };

  return userReviews;
};
