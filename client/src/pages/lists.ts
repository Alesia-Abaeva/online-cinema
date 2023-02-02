import { renderListsPage } from 'src/components/ListsPage/ListsPage';
import { renderApp } from '../components/App/App';

export const lists = (): void => {
  renderApp(renderListsPage);
};
