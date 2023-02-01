import { createElem } from '../../utils/create-element';
import { renderListContent } from './components/ListContent/ListContent';
import styles from './ListPage.module.scss';

export const renderList = (listItems: ListItems, listData: ListCard): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['list']);

  const listContainer: HTMLElement = createElem('div', 'list__container');

  const filters: HTMLElement = createElem('div', 'filters');

  const litsContent: HTMLElement = renderListContent(listItems, listData);

  // // Test: CONTENT GOES HERE \/
  // const errorCode: HTMLElement = createElem('h1', 'not-found__error-code');
  // errorCode.innerHTML = listData.title;
  // const errorMessage: HTMLElement = createElem('p', 'not-found__message');
  // errorMessage.innerHTML = listItems.item.docs[0].name;

  // mainContent.append(errorCode, errorMessage);

  listContainer.append(filters, litsContent);

  mainContent.append(listContainer);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
