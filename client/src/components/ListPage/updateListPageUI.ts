import { getList } from 'src/api/back/lists';
import { ALL_LISTS } from 'src/const/all-lists';
import { paginationState, sortState } from 'src/const/default-query-options';
import { toQueryString } from 'src/router/to-query-string';
import { extractAfterLastSlash } from 'src/utils/extract-after-last-slash';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import { isError } from 'src/utils/type-checkers';
import { updateBubbleFilter } from './components/Filters/components/BubbleFilter/updateBubbleFilter';
import { renderListContent } from './components/ListContent/ListContent';

export const updateListPageUI = async () => {
  const { pathname } = window.location;
  const afterLastSlash = extractAfterLastSlash(pathname);

  toQueryString({ page: paginationState.page, limit: paginationState.limit, sort: sortState.sort });

  if (afterLastSlash) {
    const res = await getList({
      id: afterLastSlash,
      page: paginationState.page,
      limit: paginationState.limit,
      sort: sortState.sort,
    });
    const listData = ALL_LISTS.find((el) => el.url === pathname);

    if (!isError(res) && listData) {
      const listItems: ListItems = {
        item: res,
        pathname,
      };
      if (res.docs.length === 0 && paginationState.page !== 1) {
        paginationState.page--;
        updateListPageUI();
        return;
      }

      paginationState.total = res.total;

      const listCont = document.getElementById('list-content') as HTMLElement;
      listCont.innerHTML = '';
      listCont.append(renderListContent(listItems, listData));

      const prevBtn = document.getElementById('prev') as HTMLElement;
      const nextBtn = document.getElementById('next') as HTMLElement;

      setPaginationBtns(prevBtn, nextBtn, paginationState.page, paginationState.limit, paginationState.total);
      const bubbleFilter = document.querySelector('.bubble-filter') as HTMLElement;
      updateBubbleFilter(bubbleFilter, sortState.sort);
    }
  }
};
