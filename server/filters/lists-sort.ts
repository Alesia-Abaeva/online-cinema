import { FindedMoviesBack } from '../types/films/res-film';

export const LISTS_SORT = [
  {
    sort: 'MAX_VOTES',
    fn: (a: FindedMoviesBack, b: FindedMoviesBack) => b.votes.kp - a.votes.kp,
  },
  {
    sort: 'MAX_RATING',
    fn: (a: FindedMoviesBack, b: FindedMoviesBack) => b.rating.kp - a.rating.kp,
  },
  {
    sort: 'YEAR',
    fn: (a: FindedMoviesBack, b: FindedMoviesBack) => b.year - a.year,
  },
];
