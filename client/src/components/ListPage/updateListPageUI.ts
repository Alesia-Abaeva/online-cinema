import { ALL_LISTS } from 'src/const/all-lists';
import { paginaitonState } from 'src/const/default-query-options';
import { toQueryString } from 'src/router/to-query-string';
import { getListFucntion } from 'src/utils/get-list-function';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import { isError } from 'src/utils/type-checkers';
import { renderListContent } from './components/ListContent/ListContent';

export const updateListPageUI = async () => {
  const { pathname } = window.location;
  const listFn = getListFucntion(pathname);

  toQueryString({ page: paginaitonState.page, limit: paginaitonState.limit });

  if (listFn !== -1) {
    const res = await listFn({ page: paginaitonState.page, limit: paginaitonState.limit });
    const listData = ALL_LISTS.find((el) => el.url === pathname);

    if (!isError(res) && listData) {
      const listItems: ListItems = {
        item: res,
        pathname,
      };
      if (res.docs.length === 0 && paginaitonState.page !== 1) {
        paginaitonState.page--;
        updateListPageUI();
        return;
      }

      paginaitonState.total = res.total;

      const listCont = document.getElementById('list-content') as HTMLElement;
      listCont.innerHTML = '';
      listCont.append(renderListContent(listItems, listData));

      const prevBtn = document.getElementById('prev') as HTMLElement;
      const nextBtn = document.getElementById('next') as HTMLElement;
      setPaginationBtns(prevBtn, nextBtn, paginaitonState.page, paginaitonState.limit, paginaitonState.total);
    }
  }
};
