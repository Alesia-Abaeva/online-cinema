import { FIELD } from '../const/api/field';
import { API_KEY, API_REQUEST } from '../const/api/url';
import { apiCall } from './api';

export const getData = async <T>(options: RequestData, page: ApiPage) => {
  const { data } = await apiCall.get<T>(page, options);
  return data;
};

/** Получаем данные о фильме по id */
export const getMovie = (idFilms: number) =>
  getData<ResponseMovie>({ search: idFilms, field: FIELD.ID, token: API_KEY }, API_REQUEST.MOVIE);
