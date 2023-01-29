import { createElem } from '../../../../../../utils/create-element';
import styles from './SearchBox.module.scss';

export const renderSearchBox = (): HTMLElement => {
  const searchBox: HTMLElement = createElem('div', styles['search__box']);

  return searchBox;
};
