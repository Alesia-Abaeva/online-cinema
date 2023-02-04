import { createElem } from 'src/utils/create-element';
import { renderPersonSidebar } from './components/PersonSidebar/PersonSidebar';
import styles from './PersonalAccount.module.scss';

export const renderPersonalAccountPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  //   main.classList.add('main_backdrop');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['personal-account']);

  const profileSideBar: HTMLElement = renderPersonSidebar();
  const profileInformContainer: HTMLElement = createElem('div', styles['profile-info__cnt']);

  mainContent.append(profileSideBar, profileInformContainer);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
