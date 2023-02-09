import {
  formatBirthDate,
  formatBirthPlace,
  formatCareer,
  formatGrowth,
  formatTotalMovies,
} from './person-data-formaters';

export const getPersonFields = (personData: ResponsePerson): PersonFields[] => {
  return [
    { title: 'Карьера', displayedData: formatCareer(personData.profession) },
    { title: 'Рост', displayedData: formatGrowth(personData.growth) },
    { title: 'Дата рождения', displayedData: formatBirthDate(personData.birthday, personData.age) },
    { title: 'Место рождения', displayedData: formatBirthPlace(personData.birthPlace) },
    { title: 'Всего фильмов', displayedData: formatTotalMovies(personData.movies) },
  ];
};
