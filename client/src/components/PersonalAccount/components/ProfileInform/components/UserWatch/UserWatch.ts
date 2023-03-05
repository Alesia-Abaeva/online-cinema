import { getFolder } from 'src/api/folders';
import { renderCollectionFilms } from 'src/components/CollectionPage/component/Collection';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { isResponseFolder } from 'src/utils/type-checkers';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './UserWatch.module.scss';

// пустой контейнер
export const renderUserWatchEmpty = (message?: string): HTMLElement => {
  const data: HTMLElement = createElem('div', 'profile-info__data');
  const dataTitle: HTMLElement = createElem('h2', 'profile-watch__title');
  dataTitle.innerHTML = 'Здесь пока ничего нет';
  const dataDescroption: HTMLElement = createElem('div', 'profile-watch__description');
  dataDescroption.innerHTML = !message
    ? 'Фильмы и сериалы появятся автоматически — просто начните их смотреть. Чтобы смотреть фильмы, оформите подписку.'
    : message;
  const icon: HTMLElement = createElem('div', 'profile-watch__icon');

  data.append(dataTitle, dataDescroption, icon);

  return data;
};

export const renderUserWatchFilms = (): HTMLElement => {
  const data: HTMLElement = createElem('div', 'profile-info__data');

  const listCont = createElem('div', 'collection__list-container');

  const historyData = store.getState().user.personal.data?.folders?.watchedRecently;
  if (historyData) {
    getFolder({ id: 'watchedRecently' }).then((res) => {
      if (res && isResponseFolder(res)) {
        const list: HTMLElement = renderCollectionFilms(res.data.reverse(), false);
        listCont.append(list);
      }
    });
  } else {
    data.innerHTML = 'Представь здесь фильмы';
  }

  data.append(listCont);
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

  const stateWatchFilms = store.getState().user.personal.data?.folders?.watchedRecently.length;
  userProfile.append(stateWatchFilms ? film : empty);

  store.subscribe(() => {
    const userState = store.getState().user.personal;

    if (userState.data?.folders?.watchedRecently.length) {
      userProfile.contains(empty) ? userProfile.removeChild(empty) : userProfile.append(film);
    } else {
      userProfile.contains(film) ? userProfile.removeChild(film) : userProfile.append(empty);
    }
  });

  return userProfile;
};
