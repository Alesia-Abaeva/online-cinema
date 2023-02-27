import { REVIEW_FOR_FILM_AND_USER } from 'src/const/api/url';
import { backCall } from '../api';

export const getUserFilmReview = async (filmId: number) =>
  backCall.get<UserFilmReviewResponse>(`${REVIEW_FOR_FILM_AND_USER}/${filmId}`);
