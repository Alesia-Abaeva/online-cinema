import { Iitem } from 'src/const/genres-data';

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

export const isResponseFolder = (data: ResponseFolder | ResponseUserFolder): data is ResponseFolder => {
  return 'folderName' in data;
};

export const isResponseUserFolder = (data: ResponseFolder | ResponseUserFolder): data is ResponseUserFolder => {
  return 'displayedName' in data;
};
