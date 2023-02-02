import { isError } from 'src/utils/type-checkers';
import { complexMovieSearch } from '../../../../../../api/films';
import { FIELD } from '../../../../../../const/api/field';
import { API_KEY } from '../../../../../../const/api/url';
import { createElem } from '../../../../../../utils/create-element';
import { renderSearchBoxCard } from './components/SearchBoxCard/SearchBoxCard';
import styles from './SearchBox.module.scss';

export const renderSearchBox = async (res: ResponseFindedMovies | ResErrorMes | null): Promise<HTMLElement> => {
  const searchBox: HTMLElement = createElem('div', styles['search-box']);
  let films;
  if (res) {
    films = res;
  } else {
    // USE STATE HERE ???
    const suggestionsTitle: HTMLElement = createElem('div', 'seach-box__suggestions');
    suggestionsTitle.innerHTML = 'Возможно вам понравится';
    searchBox.append(suggestionsTitle);

    films = await complexMovieSearch([
      { field: FIELD.RATING_KP, search: '7-10' },
      { field: FIELD.YEAR, search: '2020-2023' },
      // { field: 'ageRating', search: 6 },
      { sortField: FIELD.YEAR, sortType: -1 },
      { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY },
    ]);
  }
  if (!isError(films)) {
    if (films.docs.length === 0) {
      const noResults: HTMLElement = createElem('div', 'search-box__no-results');
      noResults.innerHTML = 'По вашему запросу ничего не найдено';
      searchBox.append(noResults);
    } else {
      films.docs.forEach((el) => {
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
