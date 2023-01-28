import { renderApp } from '../components/App/App';
import { renderFilmPage } from '../components/FilmPage/FilmPage';

export const film = (filmData: TestData): void => {
  renderApp(() => renderFilmPage(filmData));
};
