import {
  formatAge,
  formatBudget,
  formatCountry,
  formatGenres,
  formatMovieLength,
  formatPersons,
  formatSlogan,
  formatWorldFees,
} from './film-data-formaters';

export const getFilmFields = (filmData: ResponseMovie) => {
  return [
    { title: 'Год производства', fieldName: filmData.year },
    { title: 'Страна', fieldName: formatCountry(filmData.countries) },
    { title: 'Жанр', fieldName: formatGenres(filmData.genres) },
    { title: 'Слоган', fieldName: formatSlogan(filmData.slogan) },
    { title: 'Режиссер', fieldName: formatPersons(filmData.persons, 'director') },
    { title: 'Сценарий', fieldName: formatPersons(filmData.persons, 'writer') },
    { title: 'Продюсер', fieldName: formatPersons(filmData.persons, 'producer') },
    { title: 'Оператор', fieldName: formatPersons(filmData.persons, 'operator') },
    { title: 'Композитор', fieldName: formatPersons(filmData.persons, 'composer') },
    { title: 'Художник', fieldName: formatPersons(filmData.persons, 'designer') },
    { title: 'Монтаж', fieldName: formatPersons(filmData.persons, 'editor') },
    { title: 'Бюджет', fieldName: formatBudget(filmData.budget) },
    { title: 'Сборы в мире', fieldName: formatWorldFees(filmData.fees) },
    { title: 'Возраст', fieldName: formatAge(filmData.ageRating) },
    { title: 'Время', fieldName: formatMovieLength(filmData.movieLength) },
  ];
};
