import { renderApp } from '../components/App/App';
import { renderFilmPage } from '../components/FilmPage/FilmPage';

export const film = (filmData: ResponseMovie): void => {
  renderApp(() => renderFilmPage(filmData));
};
