import { renderApp } from '../components/App/App';
import { renderMainPage } from '../components/MainPage/MainPage';

export const app = async (): Promise<void> => {
  renderApp(() => renderMainPage());
};
