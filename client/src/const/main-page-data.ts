export enum ViewType {
  USER = 'USER',
  GUEST = 'GUEST',
  CHILD = 'CHILD',
}

export interface SlidersSetsData {
  displayedTitle: string;
  title: string;
  url: string;
}

export type SlidersSets = {
  [Propetry in ViewType]: SlidersSetsData[];
};

export const SLIDERS: SlidersSets = {
  [ViewType.USER]: [
    {
      displayedTitle: 'Новые сериалы',
      title: 'new-shows',
      url: '/slider/new-shows',
    },
    {
      displayedTitle: 'Лучшие ужастики',
      title: 'horror',
      url: '/slider/horror',
    },
    {
      displayedTitle: 'Турция зовет',
      title: 'turkey-serials',
      url: '/slider/turkey-serials',
    },
    {
      displayedTitle: 'Истории супергероев',
      title: 'super-hero',
      url: '/slider/super-hero',
    },
    {
      displayedTitle: 'Мюзиклы',
      title: 'misikl',
      url: '/slider/misikl',
    },
    {
      displayedTitle: 'Хорошие сериалы',
      title: 'top-serials',
      url: '/slider/top-serials',
    },
    {
      displayedTitle: 'Магия рядом',
      title: 'magic',
      url: '/slider/magic',
    },
    {
      displayedTitle: 'Далекий космос',
      title: 'space',
      url: '/slider/space',
    },
    {
      displayedTitle: 'Приключения',
      title: 'adventures',
      url: '/slider/adventures',
    },
    {
      displayedTitle: 'Семейное',
      title: 'family',
      url: '/slider/family',
    },
  ],
  [ViewType.GUEST]: [
    {
      displayedTitle: 'Новые сериалы',
      title: 'new-shows',
      url: '/slider/new-shows',
    },
    {
      displayedTitle: 'Лучшие ужастики',
      title: 'horror',
      url: '/slider/horror',
    },
    {
      displayedTitle: 'Турция зовет',
      title: 'turkey-serials',
      url: '/slider/turkey-serials',
    },
  ],
  [ViewType.CHILD]: [
    {
      displayedTitle: 'Мультфильмы для вас',
      title: 'cartoons',
      url: '/slider/cartoons',
    },
    {
      displayedTitle: 'Для самых маленьких',
      title: 'zero-age',
      url: '/slider/zero-age',
    },
    {
      displayedTitle: 'Зарубежные мультики',
      title: 'foreign-cartoons',
      url: '/slider/foreign-cartoons',
    },
    {
      displayedTitle: 'Фильмы для всех возрастов',
      title: 'for-all-ages',
      url: '/slider/for-all-ages',
    },
    {
      displayedTitle: 'Мульт сериалы',
      title: 'animated-series',
      url: '/slider/animated-series',
    },
    {
      displayedTitle: 'Сказки',
      title: 'fairy-tales',
      url: '/slider/fairy-tales',
    },
    {
      displayedTitle: 'Мультики от Pixar',
      title: 'pixar',
      url: '/slider/pixar',
    },
  ],
};

export const DATA_MAIN = {
  TOP10: {
    displayedTitle: 'Топ 10',
    title: 'top-10',
    url: '/slider/top-10',
  },
  GENRE: {
    displayedTitle: 'Жанры',
    title: 'genres',
    url: '/slider/genres',
  },
};

export const SLIDERS_ORDER = [
  {
    displayedTitle: 'Новые сериалы',
    title: 'new-shows',
    url: '/slider/new-shows',
  },
  {
    displayedTitle: 'Топ 10',
    title: 'top-10',
    url: '/slider/top-10',
  },
  {
    displayedTitle: 'Лучшие ужастики',
    title: 'horror',
    url: '/slider/horror',
  },
  {
    displayedTitle: 'Жанры',
    title: 'genres',
    url: '/slider/genres',
  },
  {
    displayedTitle: 'Мультфильмы для вас',
    title: 'cartoons',
    url: '/slider/cartoons',
  },
  {
    displayedTitle: 'Для самых маленьких',
    title: 'zero-age',
    url: '/slider/zero-age',
  },
  {
    displayedTitle: 'Турция зовет',
    title: 'turkey-serials',
    url: '/slider/turkey-serials',
  },
  {
    displayedTitle: 'Истории супергероев',
    title: 'super-hero',
    url: '/slider/super-hero',
  },
  {
    displayedTitle: 'Мюзиклы',
    title: 'misikl',
    url: '/slider/misikl',
  },
  {
    displayedTitle: 'Хорошие сериалы',
    title: 'top-serials',
    url: '/slider/top-serials',
  },
  {
    displayedTitle: 'Магия рядом',
    title: 'magic',
    url: '/slider/magic',
  },
  {
    displayedTitle: 'Далекий космос',
    title: 'space',
    url: '/slider/space',
  },
  {
    displayedTitle: 'Приключения',
    title: 'adventures',
    url: '/slider/adventures',
  },
  {
    displayedTitle: 'Семейное',
    title: 'family',
    url: '/slider/family',
  },
];
