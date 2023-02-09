import { NAVBAR_BTNS, NAVBAR_BTNS_AUTH } from 'src/const/nav-bar-btns';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { linkHandler } from 'src/utils/link-handler';
import { renderAccountSectionHead } from './components/Account/Account';
import { rednerHamburgerNavbar } from './components/HamburgerNavbar/HamburgerNavbar';
import { rednerNavbar } from './components/Navbar/Navbar';
import { renderSearchBar } from './components/SearchBar/SearchBar';
import styles from './Header.module.scss';

export const renderHeader = (): HTMLElement => {
  const header: HTMLElement = createElem('header', 'header');

  const headerContainer: HTMLElement = createElem('div', 'header__container');

  const logo: HTMLElement = createElem('div', 'header__logo');
  const logoLink: HTMLElement = createElem('a', styles['header__logo-link']);
  logoLink.setAttribute('href', '/');
  logo.append(logoLink);

  logoLink.onclick = linkHandler;

  const accoutSection: HTMLElement = renderAccountSectionHead();
  const hamburger: HTMLElement = rednerHamburgerNavbar();
  const searchInput: HTMLElement = renderSearchBar();

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data === null) {
      headerContainer.append(logo, rednerNavbar(NAVBAR_BTNS, ''), accoutSection, hamburger, searchInput);
    } else {
      headerContainer.append(logo, rednerNavbar(NAVBAR_BTNS_AUTH, ''), accoutSection, hamburger, searchInput);
    }
  });

  header.append(headerContainer);

  return header;
};
