import { renderApp } from '../components/App/App';
import { renderFilmPage } from '../components/FilmPage/FilmPage';

export const film = (data: FilmItems): void => {
  const filmData = data.item;
  renderApp(() => renderFilmPage(filmData.data));
};
