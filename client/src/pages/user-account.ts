import { renderPersonalAccountPage } from 'src/components/PersonalAccount/PersonalAccount';
import { renderApp } from '../components/App/App';

export const user = (): void => {
  renderApp(renderPersonalAccountPage);
};

export const userSettings = (): void => {
  renderApp(renderPersonalAccountPage);
};
