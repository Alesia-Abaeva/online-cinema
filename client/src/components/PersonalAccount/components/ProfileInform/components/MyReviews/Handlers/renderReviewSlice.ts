import { renderReviewCard } from 'src/components/FilmPage/components/ReviewCard/ReviewCard';

export const renderReviewSlice = (
  reviewsGrid: HTMLElement,
  showMore: HTMLElement,
  reviews: GetReviews,
  user: AuthGetPersonToken,
  page: number
) => {
  reviews.docs.forEach((el) => {
    const reviewCard: HTMLElement = renderReviewCard(el, user);
    reviewsGrid.append(reviewCard);
  });
  if (page === reviews.pages) {
    showMore.setAttribute('disabled', 'true');
  }
};
