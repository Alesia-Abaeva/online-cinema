import { createElem } from '../../utils/create-element';
import styles from './Login.module.scss';

export const renderLoginPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('main_backdrop');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['login-page']);

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'LOGIN';

  mainContent.append(header);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
