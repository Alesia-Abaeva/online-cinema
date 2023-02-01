import { createElem } from '../../utils/create-element';
import styles from './Register.module.scss';

export const renderRegisterPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['register-page']);
  const header: HTMLElement = document.createElement('h1');
  main.classList.add('main_backdrop');
  header.innerHTML = 'REGISTER';
  mainContent.append(header);
  mainContainer.append(mainContent);
  main.append(mainContainer);
  return main;
};
