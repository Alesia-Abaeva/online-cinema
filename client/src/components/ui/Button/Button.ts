import { createElem } from 'src/utils/create-element';
import styles from './Buttons.module.scss';

/** Функция для генерации кнопки, параметрами передаем текс внутри кнопки и функцию на онклик, причем, при добавлении функции необходимо прописать тип который будет возвращать функция, у кнопки есть дефолтный стиль, его меняем, добавляя третий параментр style */
export const createButton = (
  text: string,
  func?: () => Promise<void> | void | Promise<AuthRequest>,
  style?: string
): HTMLElement => {
  const button: HTMLElement = createElem('button', styles['button']);
  button.innerHTML = text;

  style && button.classList.add(style);

  button.onclick = async () => {
    await func?.();
  };

  return button;
};
