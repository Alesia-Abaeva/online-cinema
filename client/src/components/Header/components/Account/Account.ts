// import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { handleChangeParentControl } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { CHILDE } from 'src/logic/redux/types-redux';
import { createLink } from 'src/utils/create-link-element';
import { linkHandler } from 'src/utils/link-handler';
import { renderAvatar, renderChildeAvatar } from './components/Avatar/Avatar';
import { renderProfileMenu } from './components/ProfileData/ProfileMenu';
import styles from './Account.module.scss';

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
  const avatarChildeWrapp: HTMLElement = renderChildeAvatar('Дети');
  avatarChildeWrapp.onclick = () => handleChangeParentControl({ parentControls: CHILDE }); // обновили стейт

  const profileContainer: HTMLElement = renderProfileMenu();
  avatarCnt.append(avatarWrapperHeader, avatarChildeWrapp, profileContainer);

  avatarWrapperHeader.onmouseover = () => {
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
