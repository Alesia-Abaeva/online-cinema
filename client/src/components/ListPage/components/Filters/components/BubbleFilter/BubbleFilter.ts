import { createElem } from 'src/utils/create-element';
import styles from './BubbleFilter.module.scss';

export const renderBubbleFilter = (): HTMLElement => {
  const filters: HTMLElement = createElem('div', styles['bubble-filter']);
  const filterData = [
    { title: 'По умолчанию', active: true },
    { title: 'По количеству оценок', active: false },
    { title: 'По рейтингу', active: false },
    { title: 'По дате выхода', active: false },
  ];

  filterData.forEach((el) => {
    const filter: HTMLElement = createElem('div', 'bubble-filter__item');
    if (el.active) filter.classList.add('bubble-filter__item_active');
    filter.innerHTML = el.title;
    filters.append(filter);
  });
  return filters;
};
