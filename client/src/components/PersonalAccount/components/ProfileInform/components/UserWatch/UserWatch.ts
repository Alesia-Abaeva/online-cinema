// import { renderCollection } from 'src/components/CollectionPage/collectionPage';
// import { renderCollectionFilms } from 'src/components/CollectionPage/component/Collection';
// import { animeData, Iitem } from 'src/components/MainPage/mockData';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './UserWatch.module.scss';

// пустой контейнер
export const renderUserWatchEmpty = (): HTMLElement => {
  const data: HTMLElement = createElem('div', 'profile-info__data');
  const dataTitle: HTMLElement = createElem('h2', 'profile-watch__title');
  dataTitle.innerHTML = 'Здесь пока ничего нет';
  const dataDescroption: HTMLElement = createElem('div', 'profile-watch__description');
  dataDescroption.innerHTML = 'Чтобы посмотреть фильм или сериал позже, нажмите на иконку';
  const icon: HTMLElement = createElem('div', 'profile-watch__icon');

  data.append(dataTitle, dataDescroption, icon);

  return data;
};

// TODO: переиспользовать готовый компонент
// export const renderUserWatchFilms = (films: Iitem[]): HTMLElement => {
//   const data: HTMLElement = createElem('div', 'profile-info__data');
//   const collection: HTMLElement = renderCollectionFilms(films);

//   data.append(collection);

//   return data;
// };

export const renderUserWatch = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-watch']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Избранное';

  const btn = arrowBtn();
  title.append(btn);

  const empty: HTMLElement = renderUserWatchEmpty();
  // const film: HTMLElement = renderUserWatchFilms(animeData);

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data?.folders) {
      // userProfile.append(title, film);
    } else {
      userProfile.append(title, empty);
    }
  });

  return userProfile;
};
