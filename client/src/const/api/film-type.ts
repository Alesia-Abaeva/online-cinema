export const FILM_TYPE_API = {
  MOVIE: 'MOVIE',
  TV_SERIES: 'TV_SERIES',
  CARTOON: 'CARTOON',
  ANIME: 'ANIME',
  ANIMATED_SERIES: 'ANIMATED_SERIES',
  TV_SHOW: 'TV_SHOW',
} as const;

export const FILM_TYPE_STR: Record<FilmTypes, string> = {
  [FILM_TYPE_API.MOVIE]: 'movie',
  [FILM_TYPE_API.TV_SERIES]: 'tv-series',
  [FILM_TYPE_API.CARTOON]: 'cartoonC',
  [FILM_TYPE_API.ANIME]: 'anime',
  [FILM_TYPE_API.ANIMATED_SERIES]: 'animated-series',
  [FILM_TYPE_API.TV_SHOW]: 'tv-show',
};

export const FILM_TYPE_NUMB: Record<FilmTypes, number> = {
  [FILM_TYPE_API.MOVIE]: 1,
  [FILM_TYPE_API.TV_SERIES]: 2,
  [FILM_TYPE_API.CARTOON]: 3,
  [FILM_TYPE_API.ANIME]: 4,
  [FILM_TYPE_API.ANIMATED_SERIES]: 5,
  [FILM_TYPE_API.TV_SHOW]: 6,
};
