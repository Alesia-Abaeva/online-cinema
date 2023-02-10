// import { yearsFilterData } from 'src/const/filters-data';
import { createElem } from 'src/utils/create-element';
import { renderBubbleFilter } from './components/BubbleFilter/BubbleFilter';
// import { renderDropdownFilter } from './components/DropdownFIlter/DropdownFilter';
import styles from './Filters.module.scss';

export const renderFilters = (): HTMLElement => {
  const filters: HTMLElement = createElem('div', styles['filters']);

  const bubbleFilter: HTMLElement = renderBubbleFilter();

  // const countriesFilter: HTMLElement = renderDropdownFilter(countriesFilterData);
  // const genreFilter: HTMLElement = renderDropdownFilter(generesFilterData);
  // const yearsFilter: HTMLElement = renderDropdownFilter(yearsFilterData);

  filters.append(bubbleFilter);

  return filters;
};
