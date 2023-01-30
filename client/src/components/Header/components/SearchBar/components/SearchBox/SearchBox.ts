import { complexMovieSearch } from '../../../../../../api/films';
import { FIELD } from '../../../../../../const/api/field';
import { API_KEY } from '../../../../../../const/api/url';
import { createElem } from '../../../../../../utils/create-element';
import { renderSearchBoxCard } from './components/SearchBoxCard/SearchBoxCard';
import styles from './SearchBox.module.scss';

export const renderSearchBox = async (): Promise<HTMLElement> => {
  const searchBox: HTMLElement = createElem('div', styles['search-box']);

  // USE STATE HERE
  const films = await complexMovieSearch([
    { field: FIELD.RATING_KP, search: '7-10' }, // поиск по рейтингу кинопоиска с 7 -10 баллов
    { field: FIELD.YEAR, search: '2017-2020' }, // которые были выпущены с 2017-2020 год
    { sortField: FIELD.YEAR, sortType: 1 }, // сортируем по году в порядке возрастания
    { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY }, // и отсортированы по голосам (рейтинге imb)
  ]);

  console.log(films);
  films.docs.forEach((el) => {
    console.log(el);
    const searchCard: HTMLElement = renderSearchBoxCard(el);
    searchBox.append(searchCard);
  });

  return searchBox;
};
