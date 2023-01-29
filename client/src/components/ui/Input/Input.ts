import styles from './Input.module.scss';
import { createElem } from '../../../utils/create-element';

export const createInputElement = (type: string, style?: string): HTMLInputElement => {
  const input = createElem('input', styles['input']) as HTMLInputElement;
  input.type = type;
  style && input.classList.add(style);

  return input;
};
