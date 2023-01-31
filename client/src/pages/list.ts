import { renderList } from 'src/components/ListPage/ListPage';
import { ALL_LISTS } from 'src/const/all-lists';
import { renderApp } from '../components/App/App';

export const list = (listItems: ListItems): void => {
  const listData = ALL_LISTS.find((el) => el.url === listItems.pathname);
  if (listData) renderApp(() => renderList(listItems, listData));
};
