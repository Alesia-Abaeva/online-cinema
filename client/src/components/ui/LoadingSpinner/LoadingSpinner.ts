import { createElem } from 'src/utils/create-element';
import styles from './LoadingSpinner.module.scss';

export const renderLoadingSpinner = (): HTMLElement => {
  const loadingCont: HTMLElement = createElem('div', 'loading-cont');
  const loading: HTMLElement = createElem('div', styles['loading']);
  loadingCont.append(loading);
  return loadingCont;
};
