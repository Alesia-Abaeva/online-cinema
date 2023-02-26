interface FilmReview {
  _id: string;
  text: string;
  stars: number;
  filmId: string;
  filmName: string;
  user: {
    _id: string;
    name: string;
    lastName: string;
    avatarUrl: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface BaseReviewInfo {
  text: string;
  stars: number;
}

interface CreateReviewRequest extends BaseReviewInfo {
  filmId: string;
  filmName: string;
}

interface UpdateReviewRequest extends BaseReviewInfo {
  id: string;
}

interface PersonalReview {
  _id: string;
  text: string;
  stars: number;
  filmId: string;
  filmName: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

interface PersonalReviews extends PageLimit {
  docs: PersonalReview[];
}
interface FilmReviews extends PageLimit {
  docs: FilmReview[];
}

interface FilmReviewResponse {
  reviews: FilmReviews;
}

interface PersonalReviewResponse {
  reviews: PersonalReviews;
}

interface UserFilmReviewResponse {
  review: FilmReview | null;
}

interface ActivationPromocodeRequest {
  code: string;
}

interface PersonalPromocodeResponse {
  code: string;
}

interface CommonResponse {
  message: string;
}
