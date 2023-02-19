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

  hamburgerMenu.onclick = (e: Event) => {
    const burger = e.target as HTMLElement;
    const slideNav = document.querySelector('.nav__list_hamburger') as HTMLElement;
    burger.classList.toggle('active-burger');
    slideNav.classList.toggle('menu-active');
  };

  hamburgerNav.append(hamburgerMenu);
  return hamburgerNav;
};
