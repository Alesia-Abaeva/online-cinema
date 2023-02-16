// export const MAIN_SLIDERS = ['horror', 'turkey-serials', 'super-hero', 'new-shows'];
export enum ViewType {
  ALL = 'ALL',
  USER = 'USER',
  GUEST = 'GUEST',
  CHILD = 'CHILD',
}

export const SLIDERS = {
  // вынести их этой переменной
  [ViewType.ALL]: [
    {
      displayedTitle: 'Топ 10',
      title: 'top-10',
      url: '/slider/top-10',
      // data: ///
    },
    {
      displayedTitle: 'Жанры',
      title: 'genres',
      url: '/slider/genres',
    },
  ],

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
  ],
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
