import { renderPersonalAccountPage } from 'src/components/PersonalAccount/PersonalAccount';
import { renderApp } from '../components/App/App';

export const personal = (): void => {
  renderApp(renderPersonalAccountPage);
};
