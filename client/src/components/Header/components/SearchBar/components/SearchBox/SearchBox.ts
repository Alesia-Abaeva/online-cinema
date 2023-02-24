import { complexMovieSearch } from 'src/api/films';
import { FIELD } from 'src/const/api/field';
import { FILM_TYPE_NUMB } from 'src/const/api/film-type';
import { API_KEY } from 'src/const/api/url';
import { ViewType } from 'src/const/main-page-data';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { renderSearchBoxCard } from './components/SearchBoxCard/SearchBoxCard';
import styles from './SearchBox.module.scss';

function isError(obj: { data?: ResponseFindedMovies; error?: ErrorMessage }) {
  return !!obj.error;
}

export const defaltParamsSearchFilms = [
  { field: FIELD.RATING_KP, search: '8-10' },
  { field: FIELD.YEAR, search: '2020-2023' },
  { sortField: FIELD.YEAR, sortType: -1 },
  { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY },
];

export const childeParamsSearchFilms = [
  { field: FIELD.TYPENUMBER, search: FILM_TYPE_NUMB.CARTOON },
  { field: FIELD.RATING_KP, search: '6-10' },
  { field: FIELD.YEAR, search: '2019-2022' },
  { field: FIELD.AGE, search: 6 },
  { field: FIELD.AGE, search: 12 },
  { field: FIELD.AGE, search: 0 },
  { sortField: FIELD.YEAR, sortType: -1 },
  { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY },
];

interface SeachBoxRespons {
  data?: ResponseFindedMovies;
  error?: ErrorMessage;
}

export const renderSearchBox = async (res: SeachBoxRespons | null): Promise<HTMLElement> => {
  const { viewType } = store.getState().uiConfig;
  const searchBox: HTMLElement = createElem('div', styles['search-box']);

  const paramsSearch = viewType === ViewType.CHILD ? childeParamsSearchFilms : defaltParamsSearchFilms;
  const childeBack: HTMLElement = createElem('div', 'seach-box__child-back');

  let films;
  if (res) {
    films = res;
  } else {
    const suggestionsTitle: HTMLElement = createElem('div', styles['seach-box__suggestions']);
    suggestionsTitle.innerHTML =
      viewType === ViewType.CHILD ? 'Ищем в подписке то, что подходит по возрасту' : 'Возможно вам понравится';

    if (viewType === ViewType.CHILD) {
      searchBox.append(childeBack);
      suggestionsTitle.style.textAlign = 'center';
      suggestionsTitle.style.marginBottom = '2rem';
    }

    searchBox.append(suggestionsTitle);

    films = viewType === ViewType.CHILD ? undefined : await complexMovieSearch(paramsSearch);
  }

  if (films === undefined) {
    return searchBox;
    // первоначальная отрисовка для детского режима
  }

  if (!isError(films)) {
    if (films?.data?.docs.length === 0) {
      const noResults: HTMLElement = createElem('div', 'search-box__no-results');
      noResults.innerHTML = 'По вашему запросу ничего не найдено';
      searchBox.append(noResults);
    } else {
      films?.data?.docs.forEach((el) => {
        const searchCard: HTMLElement = renderSearchBoxCard(el);
        searchBox.append(searchCard);
      });
    }
  } else {
    const noResults: HTMLElement = createElem('div', 'search-box__no-results');
    noResults.innerHTML = 'Произошла какая то ошибка на сервере...';
    searchBox.append(noResults);
  }

  return searchBox;
};
