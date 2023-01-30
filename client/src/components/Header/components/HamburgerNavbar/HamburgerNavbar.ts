import { createElem } from '../../../../utils/create-element';
import { createLink } from '../../../../utils/create-link-element';
import { linkHandler } from '../../../../utils/link-handler';
import { toggleSearchBar } from '../../Handlers/toggle-search-bar';
import { renderSearchBox } from '../SearchBar/components/SearchBox/SearchBox';
import styles from './HamburgerNavbar.module.scss';

// REFACTOR
export const rednerHamburgerNavbar = (): HTMLElement => {
  const hamburgerNav: HTMLElement = createElem('div', styles['hamburger-nav']);

  const logo: HTMLElement = createElem('div', 'header__logo');
  const logoLink: HTMLElement = createElem('a', 'header__logo-link');
  logoLink.setAttribute('href', '/');
  logo.append(logoLink);

  logoLink.onclick = linkHandler;

  const navUl: HTMLElement = createElem('ul', 'nav__list');
  navUl.classList.add('nav__list_hamburger');
  const navBtns = [
    { link: '/', text: 'Главная' },
    { link: '/personal', text: 'Мое' },
    { link: '/lists', text: 'Списки' },
  ];
  navBtns.forEach((el) => {
    const li: HTMLElement = createElem('li', 'nav__list-item');
    const a: HTMLElement = createLink(el.link, 'nav__list-link', false, el.text);
    if (window.location.pathname === el.link) {
      a.classList.add('nav__list-link_active');
    }
    li.append(a);
    navUl.append(li);
  });

  navUl.onclick = linkHandler;

  const navSearch: HTMLElement = createElem('div', 'search-btn');
  const searchIcon: HTMLElement = createElem('div', 'search-btn__icon');

  navSearch.onclick = async () => {
    toggleSearchBar();
    const searchBoxCont = document.getElementById('search-box') as HTMLElement;
    searchBoxCont.innerHTML = '';
    const searchBox = await renderSearchBox(null);
    searchBoxCont.append(searchBox);
  };
  navSearch.append(searchIcon);

  const hamburgerMenu: HTMLElement = createElem('div', 'hamburger-menu');
  for (let i = 0; i < 3; i++) {
    const stripe: HTMLElement = createElem('div', 'hamburger-menu__line');
    stripe.id = `bar${i + 1}`;
    hamburgerMenu.append(stripe);
  }

  hamburgerMenu.onclick = (e: Event) => {
    const burger = e.target as HTMLElement;
    const slideNav = document.querySelector('.nav__list_hamburger') as HTMLElement;
    burger.classList.toggle('active-burger');
    slideNav.classList.toggle('menu-active');
  };

  hamburgerNav.append(navUl, navSearch, hamburgerMenu);
  return hamburgerNav;
};
