import { createElem } from 'src/utils/create-element';
import { renderBubbleFilter } from './components/BubbleFilter/BubbleFilter';
import styles from './Filters.module.scss';

export const renderFilters = (): HTMLElement => {
  const filters: HTMLElement = createElem('div', styles['filters']);

  const bubbleFilter: HTMLElement = renderBubbleFilter();

  filters.append(bubbleFilter);

  return filters;
};
