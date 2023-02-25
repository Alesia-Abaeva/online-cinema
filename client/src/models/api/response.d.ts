interface FilmReview {
  _id: string;
  text: string;
  stars: number;
  filmId: string;
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
}

interface UpdateReviewRequest extends BaseReviewInfo {
  id: string;
}

interface PersonalReview {
  _id: string;
  text: string;
  stars: number;
  filmId: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

interface FilmReviewResponse {
  reviews: FilmReview[];
}

interface PersonalReviewResponse {
  reviews: PersonalReview[];
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
