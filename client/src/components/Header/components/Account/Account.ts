import { store } from 'src/logic/redux';
import { Tariff } from 'src/const/subscriptions-data';
import { createElem } from 'src/utils/create-element';
import { createLink } from 'src/utils/create-link-element';
import { linkHandler } from 'src/utils/link-handler';
import { renderAvatar, renderChildAvatar } from './components/Avatar/Avatar';
import { renderProfileMenu } from './components/ProfileData/ProfileMenu';
import styles from './Account.module.scss';

export const renderAccountSectionHead = (): HTMLElement => {
  const tariff = store.getState().user.personal.data?.tariff;
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
  avatarCnt.append(avatarWrapperHeader);
  tariff === Tariff.PREMIUM && avatarCnt.append(avatarChildeWrapp); // начальный рендеринг детского профиля
  avatarCnt.append(profileContainer);

  avatarWrapperHeader.onmouseover = () => {
    profileContainer.classList.add('show__menu');
  };

  profileContainer.onmouseleave = () => {
    profileContainer.classList.remove('show__menu');
  };

  accoutSection.append(store.getState().uiConfig.isAuth ? avatarCnt : loginBtn);

  store.subscribe(() => {
    const { isAuth } = store.getState().uiConfig;

    if (!isAuth) {
      return accoutSection.contains(avatarCnt) ? accoutSection.removeChild(avatarCnt) : accoutSection.append(loginBtn);
    }

    return accoutSection.contains(loginBtn) ? accoutSection.removeChild(loginBtn) : accoutSection.append(avatarCnt);
  });

  store.subscribe(() => {
    const tariff1 = store.getState().user.personal.data?.tariff;

    if (tariff1 === Tariff.PREMIUM && !avatarCnt.contains(avatarChildeWrapp)) {
      return avatarCnt.append(avatarChildeWrapp);
    }

    if (tariff1 === Tariff.BASE && avatarCnt.contains(avatarChildeWrapp)) {
      return avatarCnt.removeChild(avatarChildeWrapp);
    }

    return null;
  });

  return accoutSection;
};
