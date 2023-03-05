import { PATH_NAMES } from 'src/const/path-names';
import { createLink } from 'src/utils/create-link-element';
import { createElem } from '../../../../utils/create-element';
import { renderNavbar } from '../Navbar/Navbar';
import styles from './HamburgerNavbar.module.scss';

export const rednerHamburgerNavbar = (): HTMLElement => {
  const hamburgerNav: HTMLElement = renderNavbar('hamburger');

  const hamburgerMenu: HTMLElement = createElem('div', styles['hamburger-menu']);
  for (let i = 0; i < 3; i++) {
    const stripe: HTMLElement = createElem('div', 'hamburger-menu__line');
    stripe.id = `bar${i + 1}`;
    hamburgerMenu.append(stripe);
  }

  // Account link
  const account = createElem('li', 'nav__list-item');
  const a = createLink(PATH_NAMES.user, 'nav__list-link', false, 'Аккаунт');
  window.location.pathname === PATH_NAMES.user && a.classList.add('nav__list-link_active');
  account.append(a);

  hamburgerMenu.onclick = (e: Event) => {
    const burger = e.target as HTMLElement;
    const slideNav = document.querySelector('.nav__list_hamburger') as HTMLElement;

    if (!slideNav.contains(account)) {
      slideNav.append(account);
    }

    burger.classList.toggle('active-burger');
    slideNav.classList.toggle('menu-active');
  };

  hamburgerNav.append(hamburgerMenu);
  return hamburgerNav;
};
