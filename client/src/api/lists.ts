import { FIELD } from 'src/const/api/field';
import { API_KEY } from 'src/const/api/url';
import { isError } from 'src/utils/type-checkers';
import { complexMovieSearch } from './films';

/** Топ 250 фильмов */
export const getTop250Movies = async (options: Options): Promise<ResponseFindedMovies | ResErrorMes> => {
  const res = await complexMovieSearch([
    { field: FIELD.TYPE, search: 'movie' },
    { field: FIELD.TYPE, search: 'cartoon' },
    { field: FIELD.TYPE, search: 'anime' },
    { field: 'top250', search: '!null' },
    { sortField: 'top250', sortType: 1 },
    { page: options.page, token: API_KEY },
  ]);
  console.log(res);
  if (!isError(res)) {
    res.total = 250;
    res.pages = 25;
  }
  return res;
};
