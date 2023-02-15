import { renderThemeSwitcher } from 'src/components/Footer/components/ThemeSwitcher/ThemeSwitcher';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './UserSettings.module.scss';

export const renderUserSettings = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-settings']);

  const titleTheme: HTMLElement = createElem('h2', 'profile-info__title');
  titleTheme.innerHTML = 'Смена темы';
  const themeCnt: HTMLElement = createElem('div', 'profile-info__data');
  const themeFilter: HTMLElement = createElem('div', 'profile-settings__theme');

  const themeSwitcher = renderThemeSwitcher();
  themeFilter.innerHTML = 'Установить новую тему';
  themeCnt.append(themeFilter, themeSwitcher);

  const btn = arrowBtn();
  titleTheme.append(btn);

  userProfile.append(
    // title, ageCnt,
    titleTheme,
    themeCnt
  );
  return userProfile;
};
