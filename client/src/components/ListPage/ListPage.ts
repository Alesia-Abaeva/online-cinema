import { createElem } from '../../utils/create-element';
import styles from './ListPage.module.scss';

export const renderList = (listItems: ListItems, listData: ListCard): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['list']);

  // Test: CONTENT GOES HERE \/
  const errorCode: HTMLElement = createElem('h1', 'not-found__error-code');
  errorCode.innerHTML = listData.title;
  const errorMessage: HTMLElement = createElem('p', 'not-found__message');
  errorMessage.innerHTML = listItems.item.docs[0].name;

  mainContent.append(errorCode, errorMessage);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
