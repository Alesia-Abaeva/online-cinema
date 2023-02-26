import { renderReviewCard } from 'src/components/FilmPage/components/ReviewCard/ReviewCard';

export const renderReviewSlice = (
  reviewsGrid: HTMLElement,
  showMore: HTMLElement,
  reviews: PersonalReview[] | FilmReview[],
  user: AuthGetPersonToken | null,
  page: number,
  pages: number
) => {
  reviews.forEach((el) => {
    const reviewCard: HTMLElement = renderReviewCard(el, user);
    reviewsGrid.append(reviewCard);
  });
  if (page === pages) {
    showMore.setAttribute('disabled', 'true');
  }
};
