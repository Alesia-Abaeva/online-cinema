import { updateListPageUI } from 'src/components/ListPage/updateListPageUI';
import { sortState } from 'src/const/default-query-options';
import { fromQueryString } from 'src/router/from-query-string';
import { createElem } from 'src/utils/create-element';
import styles from './BubbleFilter.module.scss';
import { updateBubbleFilter } from './updateBubbleFilter';

export const renderBubbleFilter = (): HTMLElement => {
  const filters: HTMLElement = createElem('div', styles['bubble-filter']);
  const filterData = [
    { title: 'По умолчанию', active: true, sort: 'DEFAULT' },
    { title: 'По количеству оценок', active: false, sort: 'MAX_VOTES' },
    { title: 'По рейтингу', active: false, sort: 'MAX_RATING' },
    { title: 'По дате выхода', active: false, sort: 'YEAR' },
  ];

  filterData.forEach((el) => {
    const filter: HTMLElement = createElem('div', 'bubble-filter__item');
    filter.id = el.sort;
    if (el.active) filter.classList.add('bubble-filter__item_active');
    filter.innerHTML = el.title;
    filters.append(filter);
  });

  filters.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('bubble-filter__item')) {
      const sortType = target.id as SortTypes;
      sortState.sort = sortType;
      updateListPageUI();
    }
  };
  const curOpt = fromQueryString(window.location.search);
  if (curOpt.sort) {
    sortState.sort = curOpt.sort;
  }
  updateBubbleFilter(filters, sortState.sort);

  return filters;
};
