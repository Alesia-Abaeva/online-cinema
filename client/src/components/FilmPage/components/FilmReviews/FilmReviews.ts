import { renderReviewSlice } from 'src/components/PersonalAccount/components/ProfileInform/components/MyReviews/Handlers/renderReviewSlice';
import { renderUserWatchEmpty } from 'src/components/PersonalAccount/components/ProfileInform/components/UserWatch/UserWatch';
import { createButton } from 'src/components/ui/Button/Button';
import { appDispatch, store } from 'src/logic/redux';
import { fetchFilmReviews } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
import styles from './FilmReviews.module.scss';

export const renderFilmReviews = (filmId: number): HTMLElement => {
  const userReviews: HTMLElement = createElem('div', styles['film-reviews']);

  const title: HTMLElement = createElem('h2', 'id-page__about-title');
  title.innerHTML = 'Отзывы пользователей';

  const dataCont: HTMLElement = createElem('div', 'profile-info__data');
  dataCont.classList.add('film-reviews__wrapper');

  const reviewsGrid: HTMLElement = createElem('div', 'reviews');

  const showMore: HTMLElement = createButton('Показать еще', undefined, 'reviews__show-more');

  userReviews.append(title);

  let page = 1;
  appDispatch(fetchFilmReviews(filmId, 1));

  store.subscribe(() => {
    const reviewsState = store.getState().reviews;
    const paginationState = store.getState().reviews.film.pagination;
    const reviews = reviewsState.film.data as unknown as FilmReview[];

    if (!reviewsState.film.isLoading) {
      userReviews.innerHTML = '';
      if (reviews && reviews.length > 0 && paginationState) {
        reviewsGrid.innerHTML = '';
        renderReviewSlice(reviewsGrid, showMore, reviews, null, page, paginationState.pages);
        dataCont.append(reviewsGrid, showMore);
        userReviews.append(title, dataCont);
      } else {
        const emptyMes: HTMLElement = renderUserWatchEmpty('Вы будете первыми кто оставит отзыв');
        userReviews.append(title, emptyMes);
      }
    }

    if (reviewsState.film.error) {
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
    appDispatch(fetchFilmReviews(filmId, page));
  };

  return userReviews;
};
