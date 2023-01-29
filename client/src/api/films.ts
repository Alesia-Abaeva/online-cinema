import { FIELD } from 'src/const/api/field';
import { FILM_TYPE_NUMB } from 'src/const/api/film-type';
import { API_KEY, API_REQUEST } from 'src/const/api/url';
import { getData } from './get-data-api';

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
  { field: FIELD.RATING_KP, search: '7-10' }, //поиск по рейтингу кинопоиска с 7 -10 баллов
  { field: FIELD.YEAR, search: '2017-2020' }, // которые были выпущены с 2017-2020 год
  { field: FIELD.TYPENUMBER, search: FILM_TYPE_NUMB.TV_SERIES }, // выбираем только сериалы
  { sortField: FIELD.YEAR, sortType: 1 }, //сортируем по году в порядке возрастания
  { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY }, // и отсортированы по голосам (рейтинге imb)
]);
