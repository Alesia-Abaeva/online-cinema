import { createElem } from '../../utils/create-element';
import styles from './Overlay.module.scss';

export const renderOverlay = (handler: () => void, id: string): HTMLElement => {
  const overlay: HTMLElement = createElem('div', styles['overlay']);
  overlay.id = id;
  overlay.onclick = handler;
  return overlay;
};
