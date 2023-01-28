import { FIELD } from '../const/api/field';
import { FILM_TYPE_NUMB } from '../const/api/film-type';
import { API_KEY, API_REQUEST } from '../const/api/url';
import { apiCall } from './api';

export const getData = async <T>(options: RequestData | RequestData[], page: ApiPage) => {
  const { data } = await apiCall.get<T>(page, options);
  return data;
};

/** Получаем данные о фильме по id */
export const getMovie = (idFilms: number) =>
  getData<ResponseMovie>({ search: idFilms, field: FIELD.ID, token: API_KEY }, API_REQUEST.MOVIE);

/** Поиск по фильмaм по году(FIELD.YEAR), жанру(FIELD.TYPENUMBER), названию(FIELD.NAME) */
export const findedMovies = (inputData: number | string, fieldData: string, isStrict: boolean = true) =>
  getData<ResponseFindedMovies>({ search: inputData, field: fieldData, token: API_KEY, isStrict }, API_REQUEST.MOVIE);
// При поиске по полям содержащих текст стоит учитывать, что по умолчанию поиск строгий, но строгий режим можно отключить добавив параметр isStrict=false.
// Тогда поиск будет использовать выражение /.*текст.*/gi это сделает текстовый поиск очень гибким, значительно медленным (приходится обходить всю базу) и не совсем точным.
// Чтобы отображать более релевантные результаты придется добавлять сортировки.

//Пример поиска по типу фильмы
findedMovies(FILM_TYPE_NUMB.MOVIE, FIELD.TYPENUMBER);

//
/** Сложный поиск фильмов, по любому значению в любых вариациях, в options передается массив поисковых параметров*/
export const complexMovieSearch = (options: RequestData[]) => getData<ResponseFindedMovies>(options, API_REQUEST.MOVIE);

// Пример сложного поиска
complexMovieSearch([
  { field: 'rating.kp', search: 7 },
  { field: FIELD.YEAR, search: '2017-2020' },
  { field: FIELD.TYPENUMBER, search: 2 },
  { sortField: 'year', sortType: 1 },
  { sortField: 'votes.imdb', sortType: -1, token: API_KEY },
]);