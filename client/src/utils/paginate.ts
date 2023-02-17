import { paginationState } from 'src/const/default-query-options';

export const paginate = (page: number, limit: number, data: FindedMovies[] | ResponseUserFolder[]) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const resultData = data.slice(startIndex, endIndex);
  return resultData;
};

export const setPaginationState = (total: number) => {
  paginationState.limit = 10;
  paginationState.page = 1;
  paginationState.total = total;
};
