import { createElem } from 'src/utils/create-element';
import styles from './SubscriptionsPage.module.scss';

export const renderSubscriptions = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['subscriptions']);

  const subsTitle: HTMLElement = createElem('h1', 'subscriptions__title');
  subsTitle.innerHTML = 'Выберите тариф';
  const subsTable: HTMLElement = createElem('div', 'subscriptions__body');

  mainContent.append(subsTitle, subsTable);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
