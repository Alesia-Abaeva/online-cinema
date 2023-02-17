import { createElem } from 'src/utils/create-element';
import { createBtnTabAboutFilm, createBtnTabDetails } from '../../../../../ui/Buttons/Buttons';
import styles from './tabs.module.scss';

export const renderTabs = (): HTMLElement => {
  const tabs = createElem('div', styles.tabs) as HTMLElement;
  const tabsWrapper = createElem('div', styles.tabs__wrapper) as HTMLElement;
  const tabList = createElem('div', styles.tabs__list) as HTMLElement;
  const btnTabAboutFilm = createBtnTabAboutFilm() as HTMLButtonElement;
  const btnTabDetails = createBtnTabDetails() as HTMLButtonElement;

  btnTabAboutFilm.classList.add('about-film');
  btnTabDetails.classList.add('details');

  btnTabAboutFilm.classList.add('tabBtn__active');
  tabList.append(btnTabAboutFilm, btnTabDetails);

  btnTabAboutFilm.addEventListener('click', () => {
    btnTabDetails.classList.remove('tabBtn__active');
    btnTabAboutFilm.classList.add('tabBtn__active');
  });
  btnTabDetails.addEventListener('click', () => {
    btnTabAboutFilm.classList.remove('tabBtn__active');
    btnTabDetails.classList.add('tabBtn__active');
  });

  tabsWrapper.append(tabList);
  tabs.append(tabsWrapper);

  return tabs;
};
