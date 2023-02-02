export const isError = (obj: ResErrorMes | ResponseFindedMovies | ResponseMovie): obj is ResErrorMes => {
  return 'message' in obj;
};
