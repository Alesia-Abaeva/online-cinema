import { createElem } from 'src/utils/create-element';
import styles from './Loader.module.scss';

export const renderLoaderDots = (): HTMLElement => {
  const container: HTMLElement = createElem('div', styles['loader__container']);

  for (let i = 0; i < 9; i++) {
    const span: HTMLElement = createElem('span');
    span.setAttribute('style', `--i:${i}`);
    container.append(span);
  }

  return container;
};

export const renderLoader = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('loader__main');
  const container: HTMLElement = renderLoaderDots();
  // createElem('div', styles['loader__container']);

  // for (let i = 0; i < 9; i++) {
  //   const span: HTMLElement = createElem('span');
  //   span.setAttribute('style', `--i:${i}`);
  //   container.append(span);
  // }

  main.append(container);
  return main;
};
