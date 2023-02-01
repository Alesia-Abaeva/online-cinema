import { createButton } from 'src/components/ui/Button/Button';
import { paginaitonState } from 'src/const/default-query-options';
import { fromQueryString } from 'src/router/from-query-string';
import { createElem } from 'src/utils/create-element';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import styles from './Pagination.module.scss';

export const renderPagination = (updateFunc: () => void): HTMLElement => {
  const pagination: HTMLElement = createElem('div', styles['paginaiton']);

  const prevBtn: HTMLElement = createButton('Назад', undefined, 'pagination__btn');
  prevBtn.id = 'prev';

  prevBtn.onclick = () => {
    paginaitonState.page--;
    updateFunc();
  };

  const nextBtn: HTMLElement = createButton('Вперед', undefined, 'pagination__btn');
  nextBtn.id = 'next';

  nextBtn.onclick = () => {
    paginaitonState.page++;
    updateFunc();
  };

  pagination.append(prevBtn, nextBtn);
  const curPageOpt = fromQueryString(window.location.search);
  if (curPageOpt.page && curPageOpt.limit) {
    setPaginationBtns(prevBtn, nextBtn, curPageOpt.page, curPageOpt.limit, paginaitonState.total);
  }

  return pagination;
};
