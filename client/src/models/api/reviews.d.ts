interface CreateReviewData {
  filmId: string;
  text: string;
  stars: string;
}

interface GetReviews {
  createdAt: string;
  filmId: string;
  stars: number;
  text: string;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
}

interface ReviewUser {
  _id: string;
  name: string;
  lastname?: string;
  avatarUrl?: string;
}
