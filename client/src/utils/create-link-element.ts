import { createElem } from './create-element';

/** Функция для генерации элемента ссылки, необходимо ввести ссылку, создаваемый класс, нужен ли аттрибут target blank (true/false) и текст ссылки */
export const createLink = (link: string, className: string, targetBlank: boolean, text: string): HTMLElement => {
  const createdElement: HTMLElement = createElem('a', className);

  createdElement.setAttribute('href', link);
  if (targetBlank) createdElement.setAttribute('target', '_blank');
  createdElement.innerHTML = text;

  return createdElement;
};
