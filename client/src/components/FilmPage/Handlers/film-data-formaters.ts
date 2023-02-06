import { formatPriceNum } from 'src/utils/format-price';

export const formatCountry = (countries: ChildeAttribures[]): string => {
  return countries.map((el) => el.name).join(', ');
};

export const formatGenres = (genres: ChildeAttribures[]): string => {
  const str = genres.map((el) => el.name).join(', ');
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};

export const formatBudget = (budget: { currency: string; value: number }): string => {
  return budget.currency && budget.value ? `${budget.currency}${formatPriceNum(budget.value)}` : '';
};

export const formatWorldFees = (fees: FeesApi): string => {
  return fees.world.currency && fees.world.value ? `${fees.world.currency}${formatPriceNum(fees.world.value)}` : '';
};

export const formatAge = (age: string | number | null): string => {
  return age ? `${age}+` : '';
};

export const formatMovieLength = (movieLength: number): string => {
  return movieLength ? `${movieLength} мин` : '';
};

export const formatSlogan = (slogan: string): string => {
  return slogan ? `"${slogan}"` : '';
};

export const formatPersons = (persons: PersonDataApi[], profession: string, limit = 3): string => {
  const resPersons = persons.filter((el) => el['enProfession'] === profession).map((el) => el.name);
  if (resPersons.length > 3) {
    const shortRes = resPersons.slice(0, limit + 1);
    shortRes[3] = '...';
    return shortRes.join(', ');
  }
  return resPersons.join(', ');
};
