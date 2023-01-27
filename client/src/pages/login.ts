import { renderApp } from '../components/App/App';
import { renderLoginPage } from '../components/Login/Login';

export const login = (): void => {
  renderApp(renderLoginPage);
};
