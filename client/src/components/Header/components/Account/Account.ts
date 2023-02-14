import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { handleChangeParentControl } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { CHILD, PARENT } from 'src/logic/redux/types-redux';
import { route } from 'src/router/route';
import { PATH_NAMES } from 'src/const/path-names';
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

  avatarChildeWrapp.onclick = () => {
    handleChangeParentControl({
      parentControls: store.getState().user.personal.data?.parentControls === CHILD ? PARENT : CHILD,
    });
    route(PATH_NAMES.main);
  }; // обновили стейт

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
