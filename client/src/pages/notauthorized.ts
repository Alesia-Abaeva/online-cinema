import { renderStubPage } from '../components/StubPage/StubPage';
import { renderApp } from '../components/App/App';

export const notauthorized = (): void => {
  renderApp(() => renderStubPage('Извините, страница доступна только авторизованным пользователям.'));
};
