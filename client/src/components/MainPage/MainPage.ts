import { createElem } from '../../utils/create-element';
import styles from './MainPage.module.scss';

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'Do u like the font ?';
  main.append(header);
  return main;
};
