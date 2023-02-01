import { renderSlider } from './../Slider/Slider';
import { createElem } from '../../utils/create-element';
import styles from './MainPage.module.scss';
// import { complexMovieSearch } from '../../api/films';
// import { FILM_TYPE_NUMB } from '../../const/api/film-type';
// import { FIELD } from '../../const/api/field';
// import { API_KEY } from '../../const/api/url';

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);

  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'Do u like the font ?';
  mainContainer.append(header);

  interface film {
    name: string;
    img: string;
  }

  // const getSomeData = async () => {
  //   const response = await complexMovieSearch([
  //     { field: FIELD.RATING_KP, search: '7-10' }, //поиск по рейтингу кинопоиска с 7 -10 баллов
  //     { field: FIELD.YEAR, search: '2017-2020' }, // которые были выпущены с 2017-2020 год
  //     { field: FIELD.TYPENUMBER, search: FILM_TYPE_NUMB.TV_SERIES }, // выбираем только сериалы
  //     { sortField: FIELD.YEAR, sortType: 1 }, //сортируем по году в порядке возрастания
  //     { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY }, // и отсортированы по голосам (рейтинге imb)
  //   ]);
  //   console.log(response);
  //   return response;
  // };

  // getSomeData();

  // mock data
  const testArr: film[] = [
    { name: '1', img: 'https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234' },
    {
      name: '2',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '3',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '4',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '5',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '6',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '7',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '8',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '9',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '10',
      img: ' https://avatars.mds.yandex.net/get-ott/2419418/2a00000185e8883d78f0b7aa8a18418a7003/375x234',
    },
    {
      name: '11',
      img: ' https://avatars.mds.yandex.net/get-ott/2439731/2a000001856359f51ee2ad434ab4efd75c20/375x234',
    },
  ];
  mainContainer.append(renderSlider(testArr, 'Comedy'));

  main.append(mainContainer);
  return main;
};
