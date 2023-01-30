import { createElem } from '../../../../utils/create-element';
import { createLink } from '../../../../utils/create-link-element';
import { linkHandler } from '../../../../utils/link-handler';
import { toggleSearchBar } from '../Handlers/toggle-search-bar';
import { renderSearchBox } from '../SearchBar/components/SearchBox/SearchBox';
import styles from './Navbar.module.scss';

export const rednerNavbar = (): HTMLElement => {
  const navBar: HTMLElement = createElem('nav', styles['nav']);
  const navUl: HTMLElement = createElem('ul', 'nav__list');
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

  navBar.append(navUl, navSearch);
  return navBar;
};
