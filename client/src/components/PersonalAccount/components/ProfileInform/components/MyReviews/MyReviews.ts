import { createButton } from 'src/components/ui/Button/Button';
import { appDispatch, store } from 'src/logic/redux';
import { fetchPersonalReviews } from 'src/logic/redux/actions';
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
  appDispatch(fetchPersonalReviews(page));

  store.subscribe(() => {
    const reviewsState = store.getState().reviews;
    const paginationState = store.getState().reviews.personal.pagination;
    const reviews = reviewsState.personal.data as unknown as PersonalReview[];
    reviewsGrid.innerHTML = '';

    if (reviews && user && reviews.length > 0 && paginationState) {
      renderReviewSlice(reviewsGrid, showMore, reviews, user, page, paginationState.pages);
      dataCont.append(reviewsGrid, showMore);
      userReviews.append(dataCont);
    } else {
      userReviews.innerHTML = '';
      const emptyMes: HTMLElement = renderUserWatchEmpty('Оставить отзыв можно на странице фильма');
      userReviews.append(title, emptyMes);
    }
    if (reviewsState.deleteReview.error) {
      const formMes: HTMLElement = createElem('div', 'review-form__message');
      formMes.innerHTML = 'Сервер не отвечает, попробуйте еще раз';
      dataCont.append(formMes);

      setTimeout(() => {
        formMes.remove();
      }, 2000);
    }
  });

  showMore.onclick = () => {
    page++;
    appDispatch(fetchPersonalReviews(page));
  };

  return userReviews;
};
