import { createElem } from 'src/utils/create-element';
import styles from './PlayerBtn.module.scss';

export const createPlayerBtn = (cssClass: string, id: string, icon: string, tooltipText: string): HTMLElement => {
  const btn: HTMLElement = createElem('div', cssClass);
  btn.id = id;
  btn.classList.add('controls-icon');
  btn.classList.add(styles['tooltip']);
  btn.innerHTML = icon;
  const tooltip: HTMLElement = createElem('span', 'tooltiptext');
  tooltip.innerHTML = tooltipText;
  btn.append(tooltip);
  return btn;
};
