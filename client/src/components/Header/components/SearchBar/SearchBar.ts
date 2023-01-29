import { createElem } from '../../../../utils/create-element';
import { toggleSearchBar } from '../Handlers/toggle-search-bar';
import styles from './SearchBar.module.scss';

export const renderSearchBar = (): HTMLElement => {
  const navSearch: HTMLElement = createElem('div', styles['search-container']);
  const searchInput: HTMLElement = createElem('input', 'search__input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'Искать фильмы');

  const closeBtn: HTMLElement = createElem('div', 'search__close');
  const closeIcon: HTMLElement = createElem('div', 'search__close-icon');
  closeBtn.append(closeIcon);

  closeBtn.onclick = toggleSearchBar;

  navSearch.append(searchInput, closeBtn);
  return navSearch;
};
