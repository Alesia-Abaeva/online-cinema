import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { createLink } from 'src/utils/create-link-element';
import { linkHandler } from 'src/utils/link-handler';
import styles from './Account.module.scss';

export const avatar = (): HTMLElement => {
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  const avatarCircle: HTMLElement = createElem('div', 'avatar__circle');
  const avatarImg: HTMLElement = createElem('div', styles['avatar__profile']);

  //   avatarImg.style.backgroundImage = `url(${avatarUrl})`;
  //   TODO - загрузка изображений!

  avatarCircle.append(avatarImg);
  avatarWrap.append(avatarCircle);
  return avatarWrap;
};

export const renderAccountSectionHead = (): HTMLElement => {
  const accoutSection: HTMLElement = createElem('div', 'header__account');

  //   не авторизованный
  const loginBtn: HTMLElement = createElem('div', 'header__login');
  const loginLink: HTMLElement = createLink('/login', 'header__login-link', false, 'Войти');
  loginBtn.append(loginLink);
  loginLink.onclick = linkHandler;

  //   авторизованный
  const avatarCnt: HTMLElement = createElem('div', 'avatar__container');
  const personalData: HTMLElement = createElem('div', 'profile-menu__data');
  const personalName: HTMLElement = createElem('div', 'profile-menu__data-name');

  const avatarWrapperHeader: HTMLElement = avatar();
  personalData.append(personalName, avatarWrapperHeader);

  const profileContainer: HTMLElement = createElem('div', 'profile-menu__container');
  const profileMenu: HTMLElement = createElem('ul', 'profile-menu__wrapp');
  const profileOut: HTMLElement = createElem('li', 'profile-menu__item');

  profileOut.innerHTML = 'Выйти';

  profileOut.onclick = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    window.location.reload();
    // вышли из аккаунта
    // TODO - сделать всплывающее окно
    // TODO - сделать через redux?
  };

  profileMenu.append(profileOut);
  const avatarWrapperMenu: HTMLElement = avatar();

  profileContainer.append(avatarWrapperMenu, profileMenu);

  avatarCnt.append(avatarWrapperHeader, profileContainer);

  //   TODO - сделать через redux?
  avatarCnt.onmouseover = () => {
    profileContainer.classList.add('show__menu');
  };

  profileContainer.onmouseleave = () => {
    profileContainer.classList.remove('show__menu');
  };

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data === null) {
      accoutSection.append(loginBtn);
    } else {
      accoutSection.append(avatarCnt);
    }
  });

  return accoutSection;
};
