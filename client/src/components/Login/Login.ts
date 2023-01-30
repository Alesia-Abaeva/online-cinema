import { registerHandler } from 'src/api/back/auth';
import { createElem } from 'src/utils/create-element';
import { createButton } from '../ui/Button/Button';
import { createInputElement } from '../ui/Input/Input';
import styles from './Login.module.scss';

export const renderLoginPage = (): HTMLElement => {
  const stateInput = {
    email: '',
    password: '',
  };

  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('main_backdrop');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['login-page']);

  const header: HTMLElement = document.createElement('h1');
  header.innerHTML = 'Войдите или зарегистрируйтесь';

  const formContainer = createElem('div', 'form_container');

  const wrapperEmail = createElem('div', 'form__wrapp');
  const labelEmail = createElem('label', 'form_label');
  const inputEmail = createInputElement({ type: 'text', placeholder: 'Введите email', id: 'email', name: 'email' });
  inputEmail.oninput = () => {
    stateInput.email = inputEmail.value;
  };

  wrapperEmail.append(labelEmail, inputEmail);

  const wrapperPas = createElem('div', 'form__wrapp');
  const labelPas = createElem('label', 'form_label');
  const inputPas = createInputElement({
    type: 'password',
    placeholder: 'Введите пароль',
    id: 'password',
    name: 'password',
  });
  inputPas.oninput = () => {
    stateInput.password = inputPas.value;
  };

  wrapperPas.append(labelPas, inputPas);

  const button = createButton('Войти', () => {
    registerHandler({ email: stateInput.email, password: stateInput.password });
  });

  // const buttonReg = createButton('Регистрация');

  formContainer.append(wrapperEmail, wrapperPas, button);
  mainContent.append(header, formContainer);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
