import { createElem } from '../../../../utils/create-element';
import { createLink } from '../../../../utils/create-link-element';
import { linkHandler } from '../../../../utils/link-handler';
import styles from './HamburgerNavbar.module.scss';

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

  hamburgerNav.append(navUl, hamburgerMenu);
  return hamburgerNav;
};
