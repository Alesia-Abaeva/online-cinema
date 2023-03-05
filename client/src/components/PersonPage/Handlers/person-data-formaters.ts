export const formatCareer = (profession: { value: string }[]): string => {
  return profession.map((el) => el.value).join(', ');
};

export const formatGrowth = (growth: number): string => {
  return growth ? `${growth / 100} м` : '';
};

export const formatBirthDate = (birthday: string, age: number | null): string => {
  const birthDate = new Date(birthday);

  const formatedDate = birthDate.toLocaleString('ru-RU', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return age ? `${formatedDate}	- Возраст: ${age}` : `${formatedDate}`;
};

export const formatBirthPlace = (birthPlace: { value: string }[]): string => {
  return birthPlace ? birthPlace.map((el) => el.value).join(', ') : '';
};

export const formatTotalMovies = (moviesCount: MoviesPerson[]): string => {
  return moviesCount.length !== 0 ? moviesCount.length.toString() : '';
};

export const getPersonsBestMovies = (movies: MoviesPerson[]): MoviesPerson[] => {
  const uniqueIds: number[] = [];
  const uniqueValues = movies.filter((el) => {
    if (uniqueIds.indexOf(el.id) === -1) {
      uniqueIds.push(el.id);
      return el;
    }
    return false;
  });
  return uniqueValues.sort((a, b) => b.rating - a.rating);
};
