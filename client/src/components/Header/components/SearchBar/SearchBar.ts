import { complexMovieSearch } from '../../../../api/films';
import { FIELD } from '../../../../const/api/field';
import { API_KEY } from '../../../../const/api/url';
import { createElem } from '../../../../utils/create-element';
import { toggleSearchBar } from '../Handlers/toggle-search-bar';
import { renderSearchBox } from './components/SearchBox/SearchBox';
import styles from './SearchBar.module.scss';

export const renderSearchBar = (): HTMLElement => {
  const navSearch: HTMLElement = createElem('div', styles['search']);
  const searchInput: HTMLElement = createElem('input', 'search__input');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'Искать фильмы и сериалы');

  const closeBtn: HTMLElement = createElem('div', 'search__close');
  const closeIcon: HTMLElement = createElem('div', 'search__close-icon');
  closeBtn.append(closeIcon);
  closeBtn.onclick = toggleSearchBar;

  const searchBoxContainer: HTMLElement = createElem('div', 'search__box-container');
  searchBoxContainer.id = 'search-box';

  searchInput.oninput = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    const searchValue = target.value;
    const res = await complexMovieSearch([
      { field: FIELD.NAME, search: searchValue },
      { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY },
    ]);
    const searchBox = document.getElementById('search-box') as HTMLElement;
    searchBox.innerHTML = '';
    const resElems = await renderSearchBox(res);
    searchBox.append(resElems);
  };

  navSearch.append(searchInput, closeBtn, searchBoxContainer);
  return navSearch;
};
