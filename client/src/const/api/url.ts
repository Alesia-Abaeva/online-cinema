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
// export const URL_SERVER = 'http://localhost';
// export const URL_SERVER = 'https://84.38.183.40';
export const URL_SERVER = 'https://rs-films22q3.ru';

// export const URL_SERVER_AVATAR = 'http://84.38.183.40';
// export const URL_SERVER = 'http://localhost:3000';

export const REGISTER = 'api/auth/register';
export const LOGIN = 'api/auth/login';
export const PERSON_DATA = 'api/auth/person';
export const PERSON_DATA_PASS = 'api/auth/person/pass';
export const PERSON_DATA_PARENT = 'api/auth/person/parents';
export const REVIEW = 'api/reviews';
export const REVIEW_FOR_FILM = 'api/reviews/for-film';
export const REVIEW_FOR_FILM_AND_USER = 'api/reviews/for-film-user';
export const PROMOCODE = 'api/promocode';
export const PROMOCODE_PERSONAL = 'api/promocode/personal';
export const GET_LISTS = 'api/lists';
export const GET_SLIDER = 'api/sliders';
export const GET_COLLECTION = 'api/collections';
export const PERSON_DATA_TARIFF = 'api/auth/person/tariff';
export const PERSON_DELETE = 'api/auth/person/delete';
export const UPDATE_FOLDER = 'api/auth/person/folders';
export const CREATE_USER_FOLDER = 'api/auth/person/user-folders/create';
export const UPDATE_USER_FOLDER = 'api/auth/person/user-folders/update';
export const DELETE_USER_FOLDER = 'api/auth/person/user-folders/delete';
export const UPDATE_USER_FOLDER_NAME = 'api/auth/person/user-folders/update-name';

export const UPLOAD_IMG = 'upload';
