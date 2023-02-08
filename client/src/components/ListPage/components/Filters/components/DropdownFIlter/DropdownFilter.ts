import { createElem } from 'src/utils/create-element';
import styles from './DropdownFilter.module.scss';

export const renderDropdownFilter = (data: DropdownFiltersData, func?: () => void): HTMLElement => {
  const dropdownFilter: HTMLElement = createElem('div', styles['dropdown-filter']);
  const caption: HTMLElement = createElem('div', 'dropdown-filter__title');
  caption.innerHTML = data.title;

  dropdownFilter.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const openedFilter = document.querySelector('.dropdown-filter_open');
    if (openedFilter instanceof HTMLElement && target !== openedFilter) {
      openedFilter.classList.remove('dropdown-filter_open');
    }
    target.classList.toggle('dropdown-filter_open');
  };

  const dropdownList: HTMLElement = createElem('div', 'dropdown-filter__list');

  data.opt.forEach((el) => {
    const dropdownItem: HTMLElement = createElem('div', 'dropdown-filter__list-item');
    if (el.active) dropdownItem.classList.add('dropdown-filter__list-item_active');
    dropdownItem.innerHTML = el.title;

    dropdownItem.onclick = (e: Event) => {
      const target = e.target as HTMLElement;

      console.log(target.textContent);

      const list = target.parentElement as HTMLElement;
      const itemsArr = Array.from(list.children);
      itemsArr.forEach((item) => item.classList.remove('dropdown-filter__list-item_active'));

      target.classList.add('dropdown-filter__list-item_active');

      const filterEl = target.closest('.dropdown-filter') as HTMLElement;
      const titleEl = filterEl.firstElementChild as HTMLElement;
      const selectedText = target.textContent;
      titleEl.textContent = selectedText;
    };

    dropdownList.append(dropdownItem);
  });

  dropdownFilter.append(caption, dropdownList);

  return dropdownFilter;
};
