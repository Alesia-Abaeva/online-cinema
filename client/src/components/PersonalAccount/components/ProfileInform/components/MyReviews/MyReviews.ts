import { createButton } from 'src/components/ui/Button/Button';
import { paginationState } from 'src/const/default-query-options';
import { REVIEWS_PER_CLICK } from 'src/const/reviews-per-click';
import { appDispatch, store } from 'src/logic/redux';
import { fetchPersonalReviews } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
import { paginate } from 'src/utils/paginate';
import { arrowBtn } from '../Handlers/arrow-btn';
import { renderUserWatchEmpty } from '../UserWatch/UserWatch';
import { paginateReviews } from './Handlers/paginateReviews';
import { renderReviewSlice } from './Handlers/renderReviewSlice';
import styles from './MyReviews.module.scss';

export const renderUserReviews = (): HTMLElement => {
  const userReviews: HTMLElement = createElem('div', styles['profile-reviews']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Ваши отзывы';
  const btn = arrowBtn();
  title.append(btn);

  const dataCont: HTMLElement = createElem('div', 'profile-info__data');
  dataCont.classList.add('profile-reviews__wrapper');

  const reviewsGrid: HTMLElement = createElem('div', 'reviews');

  const showMore: HTMLElement = createButton('Показать еще', undefined, 'reviews__show-more');

  userReviews.append(title);

  const user = store.getState().user.personal.data;
  paginationState.page = 1;
  paginationState.limit = REVIEWS_PER_CLICK;
  appDispatch(fetchPersonalReviews());

  store.subscribe(() => {
    const reviewsState = store.getState().reviews;
    const reviews = reviewsState.personal.data as unknown as PersonalReview[];
    reviewsGrid.innerHTML = '';
    paginationState.total = reviews.length;

    const dataSlice = paginateReviews(paginationState.page, paginationState.limit, reviews) as PersonalReview[];

    if (reviews && user && reviews.length > 0) {
      renderReviewSlice(
        reviewsGrid,
        showMore,
        dataSlice,
        user,
        paginationState.page,
        Math.ceil(paginationState.total / paginationState.limit)
      );
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
    paginationState.page++;

    const data = store.getState().reviews.personal.data as unknown as PersonalReview[];
    if (data && user) {
      const nextSlice = paginate(paginationState.page, paginationState.limit, data) as PersonalReview[];
      renderReviewSlice(
        reviewsGrid,
        showMore,
        nextSlice,
        user,
        paginationState.page,
        Math.ceil(paginationState.total / paginationState.limit)
      );
      dataCont.append(reviewsGrid, showMore);
      userReviews.append(dataCont);
    }
  };

  return userReviews;
};
