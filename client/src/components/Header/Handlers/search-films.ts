import { complexMovieSearch } from '../../../api/films';
import { FIELD } from '../../../const/api/field';
import { API_KEY } from '../../../const/api/url';
import { renderSearchBox } from '../components/SearchBar/components/SearchBox/SearchBox';

export const searchFilms = async (e: Event): Promise<void> => {
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
