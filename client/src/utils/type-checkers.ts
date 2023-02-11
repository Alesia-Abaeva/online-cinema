import { Iitem } from 'src/components/MainPage/genresData';

export const isError = (
  obj: ErrorMessage | ResponseFindedMovies | ResponseMovie | ResponseFindedFullMovies
): obj is ErrorMessage => {
  return 'message' in obj;
};

export const isSort = (str: string): str is SortTypes => {
  return str === 'DEFAULT' || str === 'MAX_RATING' || str === 'MAX_VOTES' || str === 'YEAR';
};

export const isGenres = (dataArr: ResponseMovie | Iitem): dataArr is Iitem => {
  return 'img' in dataArr;
};
