import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { createLink } from 'src/utils/create-link-element';
import { linkHandler } from 'src/utils/link-handler';
import { renderAvatar, renderChildAvatar } from './components/Avatar/Avatar';
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
  const avatarChildeWrapp: HTMLElement = renderChildAvatar('Дети');

  const profileContainer: HTMLElement = renderProfileMenu();
  avatarCnt.append(avatarWrapperHeader, avatarChildeWrapp, profileContainer);

  avatarWrapperHeader.onmouseover = () => {
    profileContainer.classList.add('show__menu');
  };

  profileContainer.onmouseleave = () => {
    profileContainer.classList.remove('show__menu');
  };

  store.subscribe(() => {
    const userState = store.getState().user.personal;
    !userState.data ? accoutSection.append(loginBtn) : accoutSection.append(avatarCnt);
  });

  return accoutSection;
};
