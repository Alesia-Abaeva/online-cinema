export const BASE_URL = 'https://api.kinopoisk.dev';
export const API_KEY = 'DENQT2G-3XYM131-GQT69CC-DFS8K0R' as const;
// export const API_KEY = 'T7RA20P-ETH4ZGD-PP4PDVS-Q3FPSZB' as const;

export const API_REQUEST = {
  MOVIE: 'movie', // ccылка для работы с данными о фильмах
  PERSON: 'person', // ccылка для работы с данными об актерах, режиссерах и т.д.
  REVIEW: 'review',
  IMAGE: 'image',
} as const;

// export const URL_SERVER: string = 'http://127.0.0.1:3000';
export const URL_SERVER = 'http://localhost:3000';

export const REGISTER = 'api/auth/register';
export const LOGIN = 'api/auth/login';
export const PERSON_DATA = 'api/auth/person';
export const UPLOAD_IMG = 'upload';
