import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { ViewType } from 'src/const/main-page-data';
import { PATH_NAMES } from 'src/const/path-names';
import { appDispatch, store } from 'src/logic/redux';
import { setViewType } from 'src/logic/redux/actions';
import { CHILD } from 'src/logic/redux/types-redux';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import { renderAvatar, renderChildAvatar } from '../Avatar/Avatar';
import styles from './ProfileMenu.module.scss';

export const renderProfileMenu = (): HTMLElement => {
  const profileContainer: HTMLElement = createElem('div', styles['profile-menu__container']);
  const personalData: HTMLElement = createElem('div', 'profile-menu__data');

  const personalDataWpar: HTMLElement = createElem('div', 'profile-menu__data-wrap');

  const personalName: HTMLElement = createElem('div', 'profile-menu__data-name');
  const personalEmail: HTMLElement = createElem('div', 'profile-menu__data-email');

  const profileMenu: HTMLElement = createElem('ul', 'profile-menu__wrapp');

  const childeProfileAvatar: HTMLElement = renderChildAvatar('Дети 12+');
  const childeProfile: HTMLElement = createElem('li', 'profile-menu__item');
  childeProfile.append(childeProfileAvatar);

  const profileHistory: HTMLElement = createElem('li', 'profile-menu__item');
  profileHistory.innerHTML = 'История просмотра';
  profileHistory.onclick = () => route(PATH_NAMES.userWatch);

  const profileSet: HTMLElement = createElem('li', 'profile-menu__item');
  profileSet.innerHTML = 'Настройки';
  profileSet.onclick = () => route(PATH_NAMES.userSettings);

  const profileAccount: HTMLElement = createElem('li', 'profile-menu__item');
  profileAccount.innerHTML = 'Личный кабинет';
  profileAccount.onclick = () => route(PATH_NAMES.user);

  const subscribeAccount: HTMLElement = createElem('li', 'profile-menu__item');
  subscribeAccount.innerHTML = 'Подпискa';
  subscribeAccount.onclick = () => route(PATH_NAMES.userSubscribe);

  const profileOut: HTMLElement = createElem('li', 'profile-menu__item');
  profileOut.innerHTML = 'Выйти';

  const avatarWrapperMenu: HTMLElement = renderAvatar();

  profileOut.onclick = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    appDispatch(setViewType(ViewType.GUEST));
    window.location.reload();

    // вышли из аккаунта
    // TODO: сделать всплывающее окно точно хотите выйти
  };

  personalDataWpar.append(personalName, personalEmail);
  profileMenu.append(childeProfile, profileAccount, profileHistory, profileSet, subscribeAccount, profileOut);
  personalData.append(personalDataWpar, avatarWrapperMenu);
  profileContainer.append(personalData, profileMenu);

  store.subscribe(() => {
    const userState = store.getState().user.personal;

    if (userState.data !== null) {
      personalName.innerHTML = userState.data?.name as string;
      personalEmail.innerHTML = userState.data?.email as string;
    }

    if (userState.data?.parentControls === CHILD) {
      profileContainer.classList.remove('show__menu');
      // если кликаем на детский режим в меню, убираем меню
    }
  });

  return profileContainer;
};
