import { NAVBAR_BTNS, NAVBAR_BTNS_AUTH } from 'src/const/nav-bar-btns';
import { store } from 'src/logic/redux';
import { createElem } from '../../../../utils/create-element';
import { createLink } from '../../../../utils/create-link-element';
import { linkHandler } from '../../../../utils/link-handler';
import { removeOverlay } from '../../../../utils/remove-overlay';
import { renderOverlay } from '../../../Overlay/Overlay';
import { toggleSearchBar } from '../../Handlers/toggle-search-bar';
import { renderSearchBox } from '../SearchBar/components/SearchBox/SearchBox';
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

  navSearch.onclick = async () => {
    toggleSearchBar();
    const app = document.getElementById('app') as HTMLElement;
    const overlay = renderOverlay(() => {
      toggleSearchBar();
      removeOverlay('search-overlay');
    }, 'search-overlay');
    app.append(overlay);
    const searchBoxCont = document.getElementById('search-box') as HTMLElement;
    searchBoxCont.innerHTML = '';
    const searchBox = await renderSearchBox(null);
    searchBoxCont.append(searchBox);
  };
  navSearch.append(searchIcon);

  navBar.append(navUl, navSearch);

  store.subscribe(() => {
    navUl.innerHTML = '';

    renderNavBtns(navUl);
  });

  return navBar;
};
