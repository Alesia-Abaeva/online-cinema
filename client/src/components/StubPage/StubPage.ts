import { PATH_NAMES } from 'src/const/path-names';
import { route } from 'src/router/route';
import { createElem } from '../../utils/create-element';
import { createButton } from '../ui/Button/Button';
import styles from './StubPage.module.scss';

export const renderStubPage = (text: string): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('stub_banner');

  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['stub']);

  const message: HTMLElement = createElem('h1', 'stub__message');
  message.innerHTML = text;

  const smile: HTMLElement = createElem('p', 'stub__message');
  smile.innerHTML = ' ┬┴┬┴┤(･_├┬┴┬┴';

  const button = createButton('вернуться на главную', () => route(PATH_NAMES.main));

  mainContent.append(message, smile, button);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
