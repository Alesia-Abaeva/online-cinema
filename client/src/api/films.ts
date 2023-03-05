import { FIELD } from '../const/api/field';
import { API_KEY, API_REQUEST } from '../const/api/url';
import { getData } from './get-data-api';

/** Получаем данные о фильме по id */
export const getMovie = async (options: Options): Promise<ResponseMovie> =>
  (await getData<ResponseMovie>({ search: options.id, field: FIELD.ID, token: API_KEY }, API_REQUEST.MOVIE)).data;

export const getPerson = (options: Options): Promise<{ data: ResponsePerson }> => {
  return getData<ResponsePerson>({ search: options.id, field: FIELD.ID, token: API_KEY }, API_REQUEST.PERSON);
};
/** Поиск по фильмaм по году(FIELD.YEAR), жанру(FIELD.TYPENUMBER), названию(FIELD.NAME) */
export const findedMovies = (inputData: number | string, fieldData: string, isStrict = true) =>
  getData<ResponseFindedMovies>({ search: inputData, field: fieldData, token: API_KEY, isStrict }, API_REQUEST.MOVIE);

//
/** Сложный поиск фильмов, по любому значению в любых вариациях, в options передается массив поисковых параметров */
export const complexMovieSearch = (options: RequestData[]) => getData<ResponseFindedMovies>(options, API_REQUEST.MOVIE);
