import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
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
export const renderUserWatchFilms = (): HTMLElement => {
  const data: HTMLElement = createElem('div', 'profile-info__data');
  const dataTitle: HTMLElement = createElem('h2', 'profile-watch__title');
  dataTitle.innerHTML = 'Здесь пока ничего нет, ждем готовый компонент фильма';
  const dataDescroption: HTMLElement = createElem('div', 'profile-watch__description');
  dataDescroption.innerHTML = 'Чтобы его переиспользовать!';
  const icon: HTMLElement = createElem('div', 'profile-watch__icon');

  data.append(dataTitle, dataDescroption, icon);

  return data;
};

export const renderUserWatch = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-watch']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Избранное';

  const empty: HTMLElement = renderUserWatchEmpty();
  const film: HTMLElement = renderUserWatchFilms();

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data?.films?.length) {
      userProfile.append(title, film);
    } else {
      userProfile.append(title, empty);
    }
  });

  return userProfile;
};
