import { createElem } from '../../utils/create-element';
import styles from './listByGenre.module.scss';

export const renderListByGenre = (listData): HTMLElement => {
  const genrePage: HTMLElement = createElem('div', styles.genrePage);
  const wrapper: HTMLElement = createElem('div', styles.genrePage__wrapper);
  const container: HTMLElement = createElem('div', styles.genrePage__container);
  wrapper.append(container);
  genrePage.append(wrapper);

  return genrePage;
};
