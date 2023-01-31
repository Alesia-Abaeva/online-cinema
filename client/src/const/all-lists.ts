import { getTop250Movies } from 'src/api/lists';

export const ALL_LISTS: ListCard[] = [
  {
    title: '250 лучших фильмов',
    imgUrl: 'https://avatars.mds.yandex.net/get-bunker/56833/3ee361778f24483f04a6819bc6d84bcfba9030e4/384x384',
    filmsCount: 250,
    url: '/list/top250movies',
    fn: getTop250Movies,
  },
  {
    title: 'Лучшие фильмы 2022 года',
    imgUrl: 'https://avatars.mds.yandex.net/get-bunker/50064/8130010df7b5c468194db5e34110e573ca9d446f/384x384',
    filmsCount: 25,
    url: '/list/best2022',
    fn: getTop250Movies, // CHANGE
  },
  {
    title: '250 лучших сериалов',
    imgUrl: 'https://avatars.mds.yandex.net/get-bunker/118781/02f27f401e650b75c4d42ed9f15e999392d33615/384x384',
    filmsCount: 250,
    url: '/list/top250shows',
    fn: getTop250Movies, // CHANGE
  },
];
