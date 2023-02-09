import {
  formatAge,
  formatBudget,
  formatCountry,
  formatGenres,
  formatMovieLength,
  formatSlogan,
  formatWorldFees,
  getPersonsWithJob,
} from './film-data-formaters';

export const getFilmFields = (filmData: ResponseMovie): FilmFields[] => {
  return [
    { title: 'Год производства', type: 'plain', fieldData: [filmData.year.toString()] },
    { title: 'Страна', type: 'plain', fieldData: [formatCountry(filmData.countries)] },
    { title: 'Жанр', type: 'plain', fieldData: [formatGenres(filmData.genres)] },
    { title: 'Слоган', type: 'plain', fieldData: [formatSlogan(filmData.slogan)] },
    {
      title: 'Режиссер',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'director'),
    },
    {
      title: 'Сценарий',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'writer'),
    },
    {
      title: 'Продюсер',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'producer'),
    },
    {
      title: 'Оператор',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'operator'),
    },
    {
      title: 'Композитор',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'composer'),
    },
    {
      title: 'Художник',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'designer'),
    },
    {
      title: 'Монтаж',
      type: 'person',
      fieldData: getPersonsWithJob(filmData.persons, 'editor'),
    },
    { title: 'Бюджет', type: 'plain', fieldData: [formatBudget(filmData.budget)] },
    { title: 'Сборы в мире', type: 'plain', fieldData: [formatWorldFees(filmData.fees)] },
    { title: 'Возраст', type: 'plain', fieldData: [formatAge(filmData.ageRating)] },
    { title: 'Время', type: 'plain', fieldData: [formatMovieLength(filmData.movieLength)] },
  ];
};
