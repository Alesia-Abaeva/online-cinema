import { complexMovieSearch } from '../../../../../../api/films';
import { FIELD } from '../../../../../../const/api/field';
import { API_KEY } from '../../../../../../const/api/url';
import { createElem } from '../../../../../../utils/create-element';
import { renderSearchBoxCard } from './components/SearchBoxCard/SearchBoxCard';
import styles from './SearchBox.module.scss';

export const renderSearchBox = async (res: ResponseFindedMovies | null): Promise<HTMLElement> => {
  const searchBox: HTMLElement = createElem('div', styles['search-box']);
  let films;
  if (res) {
    films = res;
  } else {
    // Сделать предложения лушче
    // USE STATE HERE ???
    films = await complexMovieSearch([
      { field: FIELD.RATING_KP, search: '7-10' }, // поиск по рейтингу кинопоиска с 7 -10 баллов
      { field: FIELD.YEAR, search: '2017-2020' }, // которые были выпущены с 2017-2020 год
      { sortField: FIELD.YEAR, sortType: 1 }, // сортируем по году в порядке возрастания
      { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY }, // и отсортированы по голосам (рейтинге imb)
    ]);
  }

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

  return searchBox;
};
