import {
  NAVBAR_BTNS,
  NAVBAR_BTNS_AUTH,
  // NAVBAR_BTNS_AUTH
} from 'src/const/nav-bar-btns';
import { store } from 'src/logic/redux';
// import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { linkHandler } from 'src/utils/link-handler';
import { renderAccountSectionHead } from './components/Account/Account';
import { renderHeaderAnimation } from './components/AnimationLayer/AnimationLayer';
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

  headerContainer.append(
    logo,
    rednerNavbar(store.getState().user.personal.data ? NAVBAR_BTNS_AUTH : NAVBAR_BTNS, ''),
    accoutSection,
    hamburger,
    searchInput
  );

  // store.subscribe(() => {
  //   const userState = store.getState().user.personal;

  //   if (userState.isLoading) {
  //     headerContainer.innerHTML = '';
  //     headerContainer.append(logo, accoutSection, hamburger, searchInput);
  //   }

  //   // if (userState.data === null) {
  //   //   headerContainer.innerHTML = '';
  //   //   headerContainer.append(logo, rednerNavbar(NAVBAR_BTNS, ''), accoutSection, hamburger, searchInput);
  //   // } else {
  //   //   headerContainer.innerHTML = '';
  //   //   headerContainer.append(logo, rednerNavbar(NAVBAR_BTNS_AUTH, ''), accoutSection, hamburger, searchInput);
  //   // }

  //   if (userState.data !== null) {
  //     headerContainer.innerHTML = '';
  //     headerContainer.append(logo, rednerNavbar(NAVBAR_BTNS_AUTH, ''), accoutSection, hamburger, searchInput);
  //   }
  // });

  // const navBar = rednerNavbar(store.getState().user.personal.data ? NAVBAR_BTNS_AUTH : NAVBAR_BTNS, '');
  // const navBar = rednerNavbar(NAVBAR_BTNS_AUTH, '');

  // headerContainer.append(logo, navBar, accoutSection, hamburger, searchInput);

  header.append(headerContainer, renderHeaderAnimation());

  return header;
};
