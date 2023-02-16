import { paginationState } from 'src/const/default-query-options';
import { createButton } from 'src/components/ui/Button/Button';
import { fromQueryString } from 'src/router/from-query-string';
import { createElem } from 'src/utils/create-element';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import styles from './Pagination.module.scss';

export const renderPagination = (updateFunc: () => void, query: boolean): HTMLElement => {
  const pagination: HTMLElement = createElem('div', styles['paginaiton']);

  const prevBtn: HTMLElement = createButton(
    'Назад',
    () => {
      if (query) {
        const opt = fromQueryString(window.location.search);
        if (opt.page && opt.limit) {
          paginationState.page = opt.page;
          paginationState.limit = opt.limit;
        }
      }
      paginationState.page--;
      updateFunc();
      window.scrollTo(0, 0);
    },
    'pagination__btn'
  );
  prevBtn.id = 'prev';

  const nextBtn: HTMLElement = createButton(
    'Вперед',
    () => {
      if (query) {
        const opt = fromQueryString(window.location.search);
        if (opt.page && opt.limit) {
          paginationState.page = opt.page;
          paginationState.limit = opt.limit;
        }
      }
      paginationState.page++;
      updateFunc();
      window.scrollTo(0, 0);
    },
    'pagination__btn'
  );
  nextBtn.id = 'next';

  pagination.append(prevBtn, nextBtn);
  if (query) {
    const curPageOpt = fromQueryString(window.location.search);
    if (curPageOpt.page && curPageOpt.limit) {
      setPaginationBtns(prevBtn, nextBtn, curPageOpt.page, curPageOpt.limit, paginationState.total);
    }
  } else {
    setPaginationBtns(prevBtn, nextBtn, paginationState.page, paginationState.limit, paginationState.total);
  }

  return pagination;
};
