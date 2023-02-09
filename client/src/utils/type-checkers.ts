export const isError = (obj: ErrorMessage | ResponseFindedMovies | ResponseMovie): obj is ErrorMessage => {
  return 'message' in obj;
};
