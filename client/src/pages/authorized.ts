import { renderStubPage } from '../components/StubPage/StubPage';
import { renderApp } from '../components/App/App';

export const authorized = (): void => {
  renderApp(() => renderStubPage('Вы уже авторизованны.'));
};
