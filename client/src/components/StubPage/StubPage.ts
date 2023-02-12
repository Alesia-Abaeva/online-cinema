import { createElem } from '../../utils/create-element';
import styles from './StubPage.module.scss';

export const renderStubPage = (text: string): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('stub_banner');

  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['stub']);

  const message: HTMLElement = createElem('h1', 'stub__message');
  message.innerHTML = text;

  mainContent.append(message);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
