import { createElem } from 'src/utils/create-element';

export const renderErrorMes = (message: string): HTMLElement => {
  const messageCont: HTMLElement = createElem('div', 'modal__error');
  const messageEl: HTMLElement = createElem('h2', 'modal__error-mes');
  messageEl.innerHTML = message;
  messageCont.append(messageEl);
  return messageCont;
};
