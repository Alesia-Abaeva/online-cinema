import { createElem } from 'src/utils/create-element';
import styles from './ProgressBar.module.scss';

export const renderProgressBar = (title: string): HTMLElement => {
  const progressBarCont: HTMLElement = createElem('div', styles['progress-bar']);
  const progressBarLine: HTMLElement = createElem('div', 'progress-bar__line');
  const progressBarLineFill: HTMLElement = createElem('div', 'progress-bar__line-fill');
  progressBarLine.append(progressBarLineFill);
  const progressBarTitle: HTMLElement = createElem('div', 'progress-bar__title');
  progressBarTitle.innerHTML = title;

  progressBarCont.append(progressBarLine, progressBarTitle);
  return progressBarCont;
};
