import { renderThemeSwitcher } from 'src/components/Footer/components/ThemeSwitcher/ThemeSwitcher';
import { renderDropdownFilter } from 'src/components/ListPage/components/Filters/components/DropdownFIlter/DropdownFilter';
import { createButton } from 'src/components/ui/Button/Button';
import { parentControl } from 'src/const/filters-data';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import { handleChangeParentControl } from '../Handlers/handlersChangeUserData';
import styles from './UserSettings.module.scss';

export const renderUserSettings = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-settings']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Ограничение контента';
  const btn = arrowBtn();
  title.append(btn);

  const ageCnt: HTMLElement = createElem('div', 'profile-info__data');
  const ageFilter: HTMLElement = renderDropdownFilter(parentControl);

  const bntCtn: HTMLElement = createElem('div', 'profile__btn-save');

  const bntSaveData: HTMLElement = createButton('сохранить');
  bntCtn.append(bntSaveData);

  ageCnt.append(ageFilter, bntCtn);

  const titleTheme: HTMLElement = createElem('h2', 'profile-info__title');
  titleTheme.innerHTML = 'Смена темы';
  const themeCnt: HTMLElement = createElem('div', 'profile-info__data');
  const themeFilter: HTMLElement = createElem('div', 'profile-settings__theme');

  const themeSwitcher = renderThemeSwitcher();
  themeFilter.innerHTML = 'Установить новую тему';
  themeCnt.append(themeFilter, themeSwitcher);

  userProfile.append(title, ageCnt, titleTheme, themeCnt);
  return userProfile;
};
