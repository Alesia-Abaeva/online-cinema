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

  const labels = ['Email', 'Пароль']; //TODO - вынести в глобальную, если будет делать перевод

  labels.forEach((data) => {
    const wrapper = createElem('div', 'form__wrapp');
    const label = createElem('label', 'form_label');
    label.innerHTML = data;
    const input =
      data === 'Email'
        ? createInputElement({ type: 'text', placeholder: 'Введите email', id: 'email', name: 'email' })
        : createInputElement({ type: 'password', placeholder: 'Введите пароль', id: 'password', name: 'password' });
    wrapper.append(label, input);

    formContainer.append(wrapper);
  });

  const button = createButton('Войти');
  const buttonReg = createButton('Регистрация');

  formContainer.append(button, buttonReg);
  mainContent.append(header, formContainer);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
