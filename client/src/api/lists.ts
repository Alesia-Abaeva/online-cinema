import { FIELD } from 'src/const/api/field';
import { API_KEY } from 'src/const/api/url';
import { complexMovieSearch } from './films';

/** Топ 250 фильмов */
export const getTop250Movies = async (options: Options): Promise<ResponseFindedMovies | ResErrorMes> => {
  return await complexMovieSearch([
    { field: FIELD.TYPE, search: 'movie' },
    { field: FIELD.TYPE, search: 'cartoon' },
    { field: FIELD.TYPE, search: 'anime' },
    { field: 'top250', search: '!null' },
    { sortField: 'top250', sortType: 1 },
    { page: options.page, token: API_KEY },
  ]);
};
