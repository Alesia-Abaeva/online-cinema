import { renderStubPage } from '../components/StubPage/StubPage';
import { renderApp } from '../components/App/App';

export const notauthorized = (): void => {
  renderApp(() => renderStubPage('Псссс, чтобы попасть на эту страницу, надо авторизоваться '));
};
