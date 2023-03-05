import { renderStubPage } from '../components/StubPage/StubPage';
import { renderApp } from '../components/App/App';

export const authorized = (): void => {
  renderApp(() => renderStubPage('Ой, куда это вы забрели?'));
};
