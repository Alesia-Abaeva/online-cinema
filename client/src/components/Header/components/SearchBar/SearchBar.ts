import { createElem } from '../../../../utils/create-element';
import { debounce } from '../../../../utils/debounce';
import { searchFilms } from '../../Handlers/search-films';
import { toggleSearchBar } from '../../Handlers/toggle-search-bar';
import styles from './SearchBar.module.scss';

export const renderSearchBar = (): HTMLElement => {
  const navSearch: HTMLElement = createElem('div', styles['search']);
  const searchInput: HTMLElement = createElem('input', 'search__input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('type', 'search');
  searchInput.setAttribute('placeholder', 'Искать фильмы и сериалы');
  searchInput.setAttribute('spellcheck', 'false');

  const closeBtn: HTMLElement = createElem('div', 'search__close');
  const closeIcon: HTMLElement = createElem('div', 'search__close-icon');
  closeBtn.append(closeIcon);
  closeBtn.onclick = toggleSearchBar;

  const searchBoxContainer: HTMLElement = createElem('div', 'search__box-container');
  searchBoxContainer.id = 'search-box';

  searchInput.oninput = debounce(searchFilms);

  navSearch.append(searchInput, closeBtn, searchBoxContainer);
  return navSearch;
};
