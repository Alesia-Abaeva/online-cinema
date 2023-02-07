import { renderUserWatch } from 'src/components/PersonalAccount/components/ProfileInform/components/MyWatch/UserWatch';
import { renderPersonalAccountPage } from 'src/components/PersonalAccount/PersonalAccount';
import { renderApp } from '../components/App/App';

export const user = (): void => {
  // renderApp(() => renderPersonalAccountPage(renderUserWatch));

  renderApp(renderPersonalAccountPage);
};

// export const userSettings = (): void => {
//   renderApp(() => renderPersonalAccountPage(renderUserWatch));
// };

export const userWatch = (): void => {
  renderApp(() => renderPersonalAccountPage(renderUserWatch));
};

// export const userSettings = (): void => {
//   renderApp(() => renderPersonalAccountPage(renderUserWatch));
// };
// export const userSettings = (): void => {
//   renderApp(() => renderPersonalAccountPage(renderUserWatch));
// };
