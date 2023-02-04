import { createElem } from 'src/utils/create-element';
import styles from './SubscriptionsPage.module.scss';

export const renderSubscriptions = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['subscriptions']);

  const errorCode: HTMLElement = createElem('h1', 'not-found__error-code');
  errorCode.innerHTML = '200';
  const errorMessage: HTMLElement = createElem('p', 'not-found__message');
  errorMessage.innerHTML = 'здесь будут подписки';

  mainContent.append(errorCode, errorMessage);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
