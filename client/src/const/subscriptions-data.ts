export const SUBSCRIPTION_PLANS: SubsctiptionsPlan[] = [
  {
    title: 'Для всех',
    type: 'base',
    cost: 0,
    benefits: [
      { title: 'Поиск фильмов и сериалов', included: true },
      { title: 'Просмотр трейлеров', included: true },
      { title: 'Возможность отмечать просмотренные', included: true },
      { title: 'Кастомные папки с фильмами', included: true },
      { title: 'Родительский контроль', included: false },
      { title: 'Просмотр фильмов и сериалов', included: false },
    ],
  },
  {
    title: 'Премиум',
    type: 'premium',
    cost: 169,
    benefits: [
      { title: 'Поиск фильмов и сериалов', included: true },
      { title: 'Просмотр трейлеров', included: true },
      { title: 'Возможность отмечать просмотренные', included: true },
      { title: 'Кастомные папки с фильмами', included: true },
      { title: 'Родительский контроль', included: true },
      { title: 'Просмотр фильмов и сериалов', included: true },
    ],
  },
];

// eslint-disable-next-line no-shadow
export enum Tariff {
  BASE = 'base',
  PREMIUM = 'premium',
}
