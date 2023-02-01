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

  listContainer.append(filters, litsContent);

  mainContent.append(listContainer);

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
