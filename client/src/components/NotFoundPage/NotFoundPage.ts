import { createElem } from '../../utils/create-element';
// import { createLink } from '../../utils/create-link-element';
import styles from './NotFoundPage.module.scss';

export const renderNotFoundPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['not-found']);

  const errorCode: HTMLElement = createElem('h1', 'not-found__error-code');
  errorCode.innerHTML = '404';
  const errorMessage: HTMLElement = createElem('p', 'not-found__message');
  errorMessage.innerHTML = 'Кажется этой страницы не существует ( ´•︵•` )';

  // TODO Create generic btn component
  //   const btnToMain: HTMLElement = createLink('/', 'not-found__btn', false, 'Вернуться на главную');

  mainContent.append(errorCode, errorMessage);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
