import './style.scss';
import './router/router';
import { getFimlForID } from './api/films';
import { API_KEY, API_REQUEST } from './const/api/url';

const testRequest = async (options: RequestData, page: ApiPage) => {
  const { data: film } = await getFimlForID(options, page);
  console.log(page, film);
  return film;
};

testRequest({ search: 1243, field: 'id', token: API_KEY }, API_REQUEST.MOVIE);
testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);
testRequest({ search: 'Лео', field: 'name', token: API_KEY }, API_REQUEST.PERSON); // поиск по имени, выводит объект в котором выведены данные в виде массива найденных объектов
testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);
testRequest({ search: 37859, field: 'id', token: API_KEY }, API_REQUEST.PERSON);

// testRequest({ search: 1243, field: 'id', token: API_KEY }, API_REQUEST.MOVIE);
