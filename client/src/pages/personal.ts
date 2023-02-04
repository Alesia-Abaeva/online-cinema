import { renderApp } from '../components/App/App';
import { renderNotFoundPage } from '../components/NotFoundPage/NotFoundPage';

export const personal = (): void => {
  renderApp(renderNotFoundPage);
};
