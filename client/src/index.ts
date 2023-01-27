import './style.scss';
import './router/router';
import { getData } from './api/films';
import { API_KEY, API_REQUEST } from './const/api/url';
import { FIELD } from './const/api/field';
import { FILM_TYPE_NUMB } from './const/api/film-type';

const testRequest = async (options: RequestData, page: ApiPage) => {
  const film = await getData(options, page);
  console.log(page, film);

  return film;
};

// testRequest({ search: 301, field: 'id', token: API_KEY }, API_REQUEST.MOVIE);
// testRequest({ search: 'Лео', field: 'name', token: API_KEY }, API_REQUEST.PERSON); // поиск по имени, выводит объект в котором выведены данные в виде массива найденных объектов
// testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);
// testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);
testRequest({ search: FILM_TYPE_NUMB.MOVIE, field: FIELD.TYPENUMBER, token: API_KEY }, API_REQUEST.MOVIE);
