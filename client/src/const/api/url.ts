export const BASE_URL: string = 'https://api.kinopoisk.dev';
export const API_KEY = 'DENQT2G-3XYM131-GQT69CC-DFS8K0R' as const;
// export const API_KEY = 'T7RA20P-ETH4ZGD-PP4PDVS-Q3FPSZB' as const;

export const API_REQUEST = {
  MOVIE: 'movie', // ccылка для работы с данными о фильмах
  PERSON: 'person', // ccылка для работы с данными об актерах, режиссерах и т.д.
  REVIEW: 'review',
  IMAGE: 'image',
} as const;
