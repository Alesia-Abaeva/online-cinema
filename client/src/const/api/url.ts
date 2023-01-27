export const BASE_URL: string = 'https://api.kinopoisk.dev';
export const API_KEY = 'T7RA20P-ETH4ZGD-PP4PDVS-Q3FPSZB' as const;

export const API_REQUEST = {
  MOVIE: 'movie', // ccылка для работы с данными о фильмах
  PERSON: 'person', // ccылка для работы с данными об актерах, режиссерах и т.д.
  REVIEW: 'review',
  IMAGE: 'image',
} as const;

// export const BASE_URL: string = 'https://kinopoiskapiunofficial.tech';
// export const API_KEY: string = '6ece95be-2d26-460e-8419-25806dad91e8';
// export const FILMS: string = 'api/v2.2/films'; // ccылка для работы с данными о фильмах
// export const STAFF: string = 'api/v1/staff'; // ccылка для работы с данными об актерах, режиссерах и т.д.
// export const PERSONS: string = 'api/v1/persons'; // ccылка для работы с данными о фильмах
