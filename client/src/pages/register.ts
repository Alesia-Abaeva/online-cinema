import { renderApp } from '../components/App/App';
import { renderRegisterPage } from '../components/Register/Register';

export const register = (): void => {
  renderApp(renderRegisterPage);
};
