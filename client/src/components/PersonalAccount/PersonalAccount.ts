import { createElem } from 'src/utils/create-element';
import { renderPersonSidebar } from './components/PersonSidebar/PersonSidebar';
import { renderAccountUserData } from './components/ProfileInform/ProfileInform';
import styles from './PersonalAccount.module.scss';

export const renderPersonalAccountPage = (func?: () => HTMLElement) => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['personal-account']);
  mainContent.classList.add('show-personal');

  const profileSideBar: HTMLElement = renderPersonSidebar();
  const profileInformContainer: HTMLElement = renderAccountUserData(func);

  mainContent.append(profileSideBar, profileInformContainer);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
