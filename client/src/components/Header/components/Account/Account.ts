// import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { createLink } from 'src/utils/create-link-element';
import { linkHandler } from 'src/utils/link-handler';
import { renderAvatar } from './components/Avatar/Avatar';
import styles from './Account.module.scss';
import { renderProfileMenu } from './components/ProfileData/ProfileMenu';

export const renderAccountSectionHead = (): HTMLElement => {
  const accoutSection: HTMLElement = createElem('div', styles['header__account']);

  //   не авторизованный
  const loginBtn: HTMLElement = createElem('div', 'header__login');
  const loginLink: HTMLElement = createLink('/login', 'header__login-link', false, 'Войти');
  loginBtn.append(loginLink);
  loginLink.onclick = linkHandler;

  //   авторизованный
  const avatarCnt: HTMLElement = createElem('div', 'avatar__container');
  const avatarWrapperHeader: HTMLElement = renderAvatar();
  const profileContainer: HTMLElement = renderProfileMenu();
  avatarCnt.append(avatarWrapperHeader, profileContainer);

  avatarCnt.onmouseover = () => {
    // console.log('fjsdlk');
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
      // personalName.innerHTML = userState.data?.name as string;
      accoutSection.append(avatarCnt);
    }
  });

  return accoutSection;
};
