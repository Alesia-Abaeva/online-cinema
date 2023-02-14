import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { updateProgressBar } from './Handlers/update-progress-bar';
import styles from './ProgressBar.module.scss';

export const renderProgressBar = (listItems: ListItems): HTMLElement => {
  const progressBarCont: HTMLElement = createElem('div', styles['progress-bar']);
  const progressBarLine: HTMLElement = createElem('div', 'progress-bar__line');
  const progressBarLineFill: HTMLElement = createElem('div', 'progress-bar__line-fill');
  progressBarLine.append(progressBarLineFill);
  const progressBarTitle: HTMLElement = createElem('div', 'progress-bar__title');
  updateProgressBar(listItems, progressBarTitle, progressBarLineFill);

  progressBarCont.append(progressBarLine, progressBarTitle);

  store.subscribe(() => {
    const titleEl = document.querySelector('.progress-bar__title');
    const progressBarLineEl = document.querySelector('.progress-bar__line-fill');
    if (titleEl instanceof HTMLElement && progressBarLineEl instanceof HTMLElement) {
      updateProgressBar(listItems, titleEl, progressBarLineEl);
    }
  });
  return progressBarCont;
};
