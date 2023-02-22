import { ViewType } from 'src/const/main-page-data';
import { store } from 'src/logic/redux';
import { complexMovieSearch } from '../../../api/films';
import { FIELD } from '../../../const/api/field';
import { API_KEY } from '../../../const/api/url';
import { renderSearchBox } from '../components/SearchBar/components/SearchBox/SearchBox';

export const searchFilms = async (e: Event): Promise<void> => {
  const target = e.target as HTMLInputElement;
  const searchValue = target.value;
  const { viewType } = store.getState().uiConfig;

  const paramsSearch =
    viewType === ViewType.CHILD
      ? [
          { field: FIELD.NAME, search: searchValue },
          { field: FIELD.AGE, search: 6 },
          { field: FIELD.AGE, search: 12 },
          { field: FIELD.AGE, search: 0 },
          { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY },
        ]
      : [
          { field: FIELD.NAME, search: searchValue },
          { sortField: FIELD.VOTES_IMDB, sortType: -1, token: API_KEY },
        ];

  const res = await complexMovieSearch(paramsSearch);

  const searchBox = document.getElementById('search-box') as HTMLElement;
  searchBox.innerHTML = '';
  const resElems = await renderSearchBox(res);
  searchBox.append(resElems);
};
