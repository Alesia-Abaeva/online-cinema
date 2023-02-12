import { Iitem } from 'src/const/genres-data';
import { IitemTop10 } from 'src/const/top10-data';

export const isError = (
  obj: ErrorMessage | ResponseFindedMovies | ResponseMovie | ResponseFindedFullMovies
): obj is ErrorMessage => {
  return 'message' in obj;
};

export const isSort = (str: string): str is SortTypes => {
  return str === 'DEFAULT' || str === 'MAX_RATING' || str === 'MAX_VOTES' || str === 'YEAR';
};

export const isGenres = (dataArr: ResponseMovie | Iitem | IitemTop10): dataArr is Iitem => {
  return 'img' in dataArr;
};

export const isTop10 = (dataArr: ResponseMovie | Iitem | IitemTop10): dataArr is IitemTop10 => {
  return 'numImg' in dataArr;
};
