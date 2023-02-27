import { formatPriceNum } from 'src/utils/format-price';
import { toHoursAndMinutes } from 'src/utils/to-hours-and-minutes';

export const formatCountry = (countries: ChildeAttribures[]): string => {
  const result = countries.map((el) => el.name).filter((el) => el);
  return result.length ? result.join(', ') : '';
};

export const formatGenres = (genres: ChildeAttribures[]): string => {
  const str = genres
    .filter((el) => el.name && !Number.isFinite(Number(el.name)))
    .map((el) => el.name && el.name.toString().trim())
    .join(', ');
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
};

export const formatBudget = (budget: { currency: string; value: number }): string => {
  return 'currency' in budget && 'value' in budget ? `${budget.currency}${formatPriceNum(budget.value)}` : '';
};

export const formatWorldFees = (fees: FeesApi): string => {
  if ('world' in fees && 'currency' in fees.world && 'value' in fees.world) {
    return fees.world.currency && fees.world.value ? `${fees.world.currency}${formatPriceNum(+fees.world.value)}` : '';
  }
  return '';
};

export const formatAge = (age: string | number | null): string => {
  return age ? `${age}+` : '';
};

export const formatMovieLength = (movieLength: number): string => {
  const { hours, minutes } = toHoursAndMinutes(movieLength);
  const hoursStr = hours.toString().padStart(2, '0');
  const minStr = minutes.toString().padStart(2, '0');
  return movieLength ? `${movieLength} мин. / ${hoursStr}:${minStr}` : '';
};

export const formatSlogan = (slogan: string): string => {
  return slogan.trim().length ? `"${slogan}"` : '';
};

export const getPersonsWithJob = (persons: PersonDataApi[], profession: string): PersonDataApi[] => {
  return persons.filter((el) => el['enProfession'] === profession).filter((el) => el.name);
};
