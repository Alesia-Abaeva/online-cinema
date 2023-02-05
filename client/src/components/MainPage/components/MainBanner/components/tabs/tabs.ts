import { btnTabAboutFilm, btnTabDetails } from '../buttons/buttons';
import { createElem } from '../../../../../../utils/create-element';
import styles from './tabs.module.scss';

export const renderTabs = (): HTMLElement => {
  const tabs = createElem('div', styles.tabs) as HTMLElement;
  const tabsWrapper = createElem('div', styles.tabs__wrapper) as HTMLElement;
  const tabList = createElem('div', styles.tabs__list) as HTMLElement;

  btnTabAboutFilm.classList.add('tabBtn__active');
  tabList.append(btnTabAboutFilm, btnTabDetails);

  tabsWrapper.append(tabList);
  tabs.append(tabsWrapper);

  return tabs;
};
