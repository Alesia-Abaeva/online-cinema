import { renderLoader } from 'src/components/Loader/Loader';
import { renderApp } from '../components/App/App';
import { renderNotFoundPage } from '../components/NotFoundPage/NotFoundPage';

export const notFound = (): void => {
  renderApp(renderNotFoundPage);
};

export const loaderPage = (): void => {
  renderApp(renderLoader);
};
