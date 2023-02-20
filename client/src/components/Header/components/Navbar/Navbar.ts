import { NAVBAR_BTNS, NAVBAR_BTNS_AUTH } from 'src/const/nav-bar-btns';
import { store } from 'src/logic/redux';
import { createElem } from '../../../../utils/create-element';
import { createLink } from '../../../../utils/create-link-element';
import { linkHandler } from '../../../../utils/link-handler';
import { removeOverlay } from '../../../../utils/remove-overlay';
import { openSearchbar } from '../../Handlers/open-searchbar';
import { toggleSearchBar } from '../../Handlers/toggle-search-bar';
import styles from './Navbar.module.scss';

const renderNavBtns = (parent: HTMLElement) => {
  const navBtns = store.getState().uiConfig.isAuth ? NAVBAR_BTNS_AUTH : NAVBAR_BTNS;

  navBtns.forEach((el) => {
    const li: HTMLElement = createElem('li', 'nav__list-item');

    const a: HTMLElement = createLink(el.link, 'nav__list-link', false, el.text);
    window.location.pathname === el.link && a.classList.add('nav__list-link_active');

    li.append(a);
    parent.append(li);
  });
};

export const renderNavbar = (navType = ''): HTMLElement => {
  const navBar: HTMLElement = createElem('nav', styles[`${navType ? `${navType}-nav` : 'nav'}`]);
  // navBar.classList.add('skeleton');

  const navUl: HTMLElement = createElem('ul', 'nav__list');

  if (navType) navUl.classList.add(`nav__list_${navType}`);

  renderNavBtns(navUl);

  navUl.onclick = linkHandler;

  const navSearch: HTMLElement = createElem('div', 'search-btn');
  const searchIcon: HTMLElement = createElem('div', 'search-btn__icon');

  navSearch.onclick = openSearchbar;
  navSearch.append(searchIcon);

  navBar.append(navUl, navSearch);

  document.onkeydown = (e: KeyboardEvent) => {
    if (e.key.toLowerCase() === 'p' && e.shiftKey && e.metaKey) {
      const isOpen = document.getElementById('search-overlay');
      if (isOpen instanceof HTMLElement) {
        toggleSearchBar();
        removeOverlay('search-overlay');
      } else {
        openSearchbar();
      }
    }
  };

  store.subscribe(() => {
    navUl.innerHTML = '';

    renderNavBtns(navUl);
  });

  return navBar;
};
