import { renderUserWatch } from 'src/components/PersonalAccount/components/ProfileInform/components/UserWatch/UserWatch';
import { renderUserReferens } from 'src/components/PersonalAccount/components/ProfileInform/components/Reference/Reference';
import { renderUserPromo } from 'src/components/PersonalAccount/components/ProfileInform/components/UserPromo/UserPromo';
import { renderUserSettings } from 'src/components/PersonalAccount/components/ProfileInform/components/UserSettings/UserSettings';
import { renderPersonalAccountPage } from 'src/components/PersonalAccount/PersonalAccount';
import { renderAvailibleTariff } from 'src/components/PersonalAccount/components/ProfileInform/components/Tariff/AvailableTariff';
import { renderApp } from '../components/App/App';

export const user = (): void => {
  renderApp(() => renderPersonalAccountPage());
};

export const userWatch = (): void => {
  renderApp(() => renderPersonalAccountPage(renderUserWatch));
};

export const userSettings = (): void => {
  renderApp(() => renderPersonalAccountPage(renderUserSettings));
};

export const userPromo = (): void => {
  renderApp(() => renderPersonalAccountPage(renderUserPromo));
};

export const userReference = (): void => {
  renderApp(() => renderPersonalAccountPage(renderUserReferens));
};

export const userSubscribe = (): void => {
  renderApp(() => renderPersonalAccountPage(renderAvailibleTariff));
};
