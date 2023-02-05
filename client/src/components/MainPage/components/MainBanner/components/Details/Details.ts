import { createElem } from 'src/utils/create-element';
import styles from './Details.module.scss';

export const renderContentWrapper = (): HTMLElement => {
  const details: HTMLElement = createElem('div', styles.filmDetails);
  return details;
};
