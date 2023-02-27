export const paginateReviews = (
  page: number,
  limit: number,
  data: FindedMovies[] | ResponseUserFolder[] | PersonalReview[]
) => {
  const endIndex = page * limit;

  const resultData = data.slice(0, endIndex);
  return resultData;
};
