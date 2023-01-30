import { createElem } from '../../../../utils/create-element';
import { toggleSearchBar } from '../Handlers/toggle-search-bar';
import styles from './SearchBar.module.scss';

export const renderSearchBar = (): HTMLElement => {
  const navSearch: HTMLElement = createElem('div', styles['search']);
  const searchInput: HTMLElement = createElem('input', 'search__input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'Искать фильмы');

  const closeBtn: HTMLElement = createElem('div', 'search__close');
  const closeIcon: HTMLElement = createElem('div', 'search__close-icon');
  closeBtn.append(closeIcon);
  closeBtn.onclick = toggleSearchBar;

  const searchBoxContainer: HTMLElement = createElem('div', 'search__box-container');
  searchBoxContainer.id = 'search-box';

  navSearch.append(searchInput, closeBtn, searchBoxContainer);
  return navSearch;
};
