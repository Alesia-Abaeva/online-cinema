import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { store } from 'src/logic/redux';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import { renderAvatar } from '../Avatar/Avatar';
import styles from './ProfileMenu.module.scss';

export const renderProfileMenu = (): HTMLElement => {
  const profileContainer: HTMLElement = createElem('div', styles['profile-menu__container']);
  const personalData: HTMLElement = createElem('div', 'profile-menu__data');

  const personalDataWpar: HTMLElement = createElem('div', 'profile-menu__data-wrap');

  const personalName: HTMLElement = createElem('div', 'profile-menu__data-name');
  const personalEmail: HTMLElement = createElem('div', 'profile-menu__data-email');

  const profileMenu: HTMLElement = createElem('ul', 'profile-menu__wrapp');
  const profileOut: HTMLElement = createElem('li', 'profile-menu__item');
  profileOut.innerHTML = 'Выйти';

  const profileHistory: HTMLElement = createElem('li', 'profile-menu__item');
  profileHistory.innerHTML = 'История просмотра';
  // TODO: переход на страницу просмотренных фильмов???

  const profileSet: HTMLElement = createElem('li', 'profile-menu__item');
  profileSet.innerHTML = 'Настройки';
  // TODO: открывается подменю настроек либо переход на страницу настроек в личном кабинете

  const profileAccount: HTMLElement = createElem('li', 'profile-menu__item');
  profileAccount.innerHTML = 'Личный кабинет';
  profileAccount.onclick = () => route('/personal');

  const avatarWrapperMenu: HTMLElement = renderAvatar();

  profileOut.onclick = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    window.location.reload();
    // вышли из аккаунта
    // TODO: сделать всплывающее окно
  };

  personalDataWpar.append(personalName, personalEmail);
  profileMenu.append(profileAccount, profileHistory, profileSet, profileOut);
  personalData.append(personalDataWpar, avatarWrapperMenu);
  profileContainer.append(personalData, profileMenu);

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data !== null) {
      personalName.innerHTML = userState.data?.name as string;
      personalEmail.innerHTML = userState.data?.email as string;
    }
  });

  return profileContainer;
};
