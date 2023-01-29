import { createElem } from '../../utils/create-element';
import { createButton } from '../ui/Button/Button';
import { createInputElement } from '../ui/Input/Input';
import styles from './Login.module.scss';

export const renderLoginPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('main_backdrop');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['login-page']);

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'Войдите или зарегистрируйтесь';

  const formContainer = createElem('form', 'form_container');

  const labels = ['Email', 'Телефон'];

  labels.forEach((data) => {
    const wrapper = createElem('div', 'form__wrapp');
    const label = createElem('label', 'form_label');
    label.innerHTML = data;
    const input = data === 'Email' ? createInputElement('text') : createInputElement('phone');
    wrapper.append(label, input);

    formContainer.append(wrapper);
  });

  const button = createButton('Войти');

  formContainer.append(button);
  mainContent.append(header, formContainer);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
