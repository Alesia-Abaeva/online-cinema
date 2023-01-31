import { FIELD } from 'src/const/api/field';
import { API_KEY, API_REQUEST } from 'src/const/api/url';
import { getData } from './get-data-api';

/** Получаем данные об актере по id */
export const getActor = (idActors: number) =>
  getData<ResponsePerson>({ search: idActors, field: FIELD.ID, token: API_KEY }, API_REQUEST.PERSON);

/** Поиск актеров по имени */
export const findedActors = (nameActor: string) =>
  getData<ResponseFindedPersons>({ search: nameActor, field: FIELD.NAME, token: API_KEY }, API_REQUEST.PERSON);
