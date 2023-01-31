import { ALL_LISTS } from 'src/const/all-lists';

export const getListFucntion = (id: string): (() => Promise<ResponseFindedMovies | ResErrorMes>) | -1 => {
  const list = ALL_LISTS.find((el) => el.url === id);
  if (list) return list.fn;
  return -1;
};
