import { authHandler } from 'src/api/back/auth';
import { createLink } from 'src/utils/create-link-element';
import { linkHandler } from 'src/utils/link-handler';
import { createElem } from '../../utils/create-element';
import { mailIcon, passwordIcon, userIcon } from '../../const/icons/icons';
import { createButton } from '../ui/Button/Button';
import { createInputElement } from '../ui/Input/Input';
import styles from './Register.module.scss';

export const renderRegisterPage = (): HTMLElement => {
  const stateInput = {
    name: '',
    email: '',
    password: '',
  };

  const main: HTMLElement = createElem('main', 'main');
  main.classList.add('main_backdrop');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['reg-page']);

  const formContainer = createElem('div', 'form_container');

  const logo = createElem('div', 'form_logo');

  // email
  const wrapperEmail = createElem('form', 'form__wrapp');
  const labelEmail = createElem('label', 'form_label');
  const iconEmail = createElem('div', 'icon__container');
  iconEmail.innerHTML = mailIcon;
  const inputEmail = createInputElement({ type: 'email', placeholder: '* email', id: 'email', name: 'email' });
  inputEmail.oninput = () => {
    stateInput.email = inputEmail.value;
  };

  wrapperEmail.append(labelEmail, iconEmail, inputEmail);

  // name
  const wrapperName = createElem('form', 'form__wrapp');
  const labelName = createElem('label', 'form_label');
  const iconName = createElem('div', 'icon__container');
  iconName.innerHTML = userIcon;
  const inputName = createInputElement({ type: 'text', placeholder: '* имя', id: 'name', name: 'name' });
  inputName.setAttribute('minLength', '3');

  inputName.oninput = () => {
    stateInput.name = inputName.value;
  };

  wrapperName.append(labelName, iconName, inputName);

  // password
  const wrapperPas = createElem('form', 'form__wrapp');
  const labelPas = createElem('label', 'form_label');
  const iconPass = createElem('div', 'icon__container');
  iconPass.innerHTML = passwordIcon;
  const inputPas = createInputElement({
    type: 'password',
    placeholder: '* пароль',
    id: 'password',
    name: 'password',
  });
  inputPas.setAttribute('minLength', '6');
  inputPas.oninput = () => {
    stateInput.password = inputPas.value;
  };

  wrapperPas.append(iconPass, labelPas, inputPas);

  const button = createButton(
    `Зарегистрироваться`,
    () => {
      authHandler({ email: stateInput.email, password: stateInput.password, name: stateInput.name });
    },
    'form_button'
  );

  const registrationContainer = createElem('div', 'reg__container');
  const registrationLink = createLink('/login', 'reg__link', true, 'Войти');
  registrationLink.onclick = linkHandler;

  const registrationText = createElem('div', 'reg__text');
  registrationText.innerHTML = `Уже есть аккаунт?&nbsp `;
  registrationContainer.append(registrationText, registrationLink);

  formContainer.append(logo, wrapperEmail, wrapperName, wrapperPas, button, registrationContainer);
  mainContent.append(formContainer);
  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
