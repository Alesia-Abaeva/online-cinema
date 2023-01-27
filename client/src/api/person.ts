import { FIELD } from '../const/api/field';
import { API_KEY, API_REQUEST } from '../const/api/url';
import { getData } from './films';

/** Получаем данные об актере по id */
export const getActor = (idActors: number) =>
  getData<ResponsePerson>({ search: idActors, field: FIELD.ID, token: API_KEY }, API_REQUEST.PERSON);

/** Поиск актеров по имени */
export const findedActors = (nameActor: string) =>
  getData<ResponseFindedPersons>({ search: nameActor, field: FIELD.NAME, token: API_KEY }, API_REQUEST.PERSON);
