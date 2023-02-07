import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './UserWatch.module.scss';

export const renderUserWatch = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-watch']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Избранное';

  const data: HTMLElement = createElem('div', 'profile-info__data');
  const dataTitle: HTMLElement = createElem('h2', 'profile-info__title');
  dataTitle.innerHTML = 'Здесь пока ничего нет';
  const dataDescroption: HTMLElement = createElem('div', 'profile-info__description');
  dataDescroption.innerHTML = 'Чтобы посмотреть фильм или сериал позже, нажмите на иконку';

  data.append(dataTitle, dataDescroption);

  userProfile.append(title, data);

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data?.films) {
      // если в стейте есть фильмы,тооооо
    }
  });

  return userProfile;
};
