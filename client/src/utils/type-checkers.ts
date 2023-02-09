export const isError = (obj: ErrorMessage | ResponseFindedMovies | ResponseMovie): obj is ErrorMessage => {
  return 'message' in obj;
};

export const isSort = (str: string): str is SortTypes => {
  return str === 'DEFAULT' || str === 'MAX_RATING' || str === 'MAX_VOTES' || str === 'YEAR';
};
