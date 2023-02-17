import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './UserWatch.module.scss';

// пустой контейнер
export const renderUserWatchEmpty = (message?: string): HTMLElement => {
  const data: HTMLElement = createElem('div', 'profile-info__data');
  const dataTitle: HTMLElement = createElem('h2', 'profile-watch__title');
  dataTitle.innerHTML = 'Здесь пока ничего нет';
  const dataDescroption: HTMLElement = createElem('div', 'profile-watch__description');
  dataDescroption.innerHTML = !message
    ? 'Фильмы и сериалы появятся автоматически — просто начните их смотреть. Или  нажмите на иконку'
    : message;
  const icon: HTMLElement = createElem('div', 'profile-watch__icon');

  data.append(dataTitle, dataDescroption, icon);

  return data;
};

// TODO: переиспользовать готовый компонент
export const renderUserWatchFilms = (): HTMLElement => {
  const data: HTMLElement = createElem('div', 'profile-info__data');
  data.innerHTML = 'Представь здесь фильмы';

  return data;
};

export const renderUserWatch = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-watch']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'История просмотра';

  const btn = arrowBtn();
  title.append(btn);

  userProfile.append(title);

  const empty: HTMLElement = renderUserWatchEmpty();
  const film: HTMLElement = renderUserWatchFilms();

  const stateWatchFilms = store.getState().user.personal.data?.folders?.watched.length;
  userProfile.append(stateWatchFilms ? film : empty);

  store.subscribe(() => {
    const userState = store.getState().user.personal;

    if (userState.data?.folders?.watched.length) {
      userProfile.contains(empty) ? userProfile.removeChild(empty) : userProfile.append(film);
    } else {
      userProfile.contains(film) ? userProfile.removeChild(film) : userProfile.append(empty);
    }
  });

  return userProfile;
};
