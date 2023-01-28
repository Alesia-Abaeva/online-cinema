import './style.scss';
import './router/router';
import { getData } from './api/films';
import { API_KEY, API_REQUEST } from './const/api/url';
import { FIELD } from './const/api/field';

const testRequest = async (options: RequestData | RequestData[], page: ApiPage) => {
  const film = await getData(options, page);
  console.log(page, film);

  return film;
};

// testRequest({ search: 301, field: 'id', token: API_KEY }, API_REQUEST.MOVIE);
// testRequest({ search: 'Лео', field: 'name', token: API_KEY }, API_REQUEST.PERSON); // поиск по имени, выводит объект в котором выведены данные в виде массива найденных объектов
// testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);
// testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);
testRequest(
  [
    { field: 'rating.kp', search: 7 },
    { field: FIELD.YEAR, search: '2017-2020' },
    { field: FIELD.TYPENUMBER, search: 2 },
    { sortField: 'year', sortType: 1 },
    { sortField: 'votes.imdb', sortType: -1, token: API_KEY },
  ],
  API_REQUEST.MOVIE
);
