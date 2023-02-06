import { createButton } from 'src/components/ui/Button/Button';
import { createInputElement } from 'src/components/ui/Input/Input';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './ProfileInform.module.scss';

export const createInputComponent = (data: InputComponent) => {
  const container = createElem('div', 'profile__form-cnt');
  const label = createElem('label', 'profile__form-label');
  label.innerHTML = data.label;
  const input = createInputElement(data.attribute);

  container.append(label, input);
  return { container, input };
};

export const renderAccountUserData = (): HTMLElement => {
  const dataCnt: HTMLElement = createElem('div', styles['profile-info__wparr']);

  const userProfile: HTMLElement = createElem('div', 'profile-info');
  const titleProfile: HTMLElement = createElem('h2', 'profile-info__title');
  titleProfile.innerHTML = 'Мой профиль';
  const dataProfile: HTMLElement = createElem('div', 'profile-info__data');

  const { container: email, input: emailInput } = createInputComponent({
    label: 'Моя почта',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });
  emailInput.setAttribute('disabled', 'true'); // почту менять нельзя!

  const { container: name, input: nameInput } = createInputComponent({
    label: 'Имя',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });

  const { container: lastname, input: lastnameInput } = createInputComponent({
    label: 'Фамилия',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });

  const bntCtn: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSaveData: HTMLElement = createButton('сохранить', () => {
    console.log('я работаю');
  });
  bntSaveData.setAttribute('disabled', 'true');
  bntCtn.append(bntSaveData);

  dataProfile.append(email, name, lastname, bntCtn);

  // блок смены пароля
  const titlePass: HTMLElement = createElem('h2', 'profile-info__title');
  titlePass.innerHTML = 'Смена пароля';

  //

  const dataPass: HTMLElement = createElem('div', 'profile-info__data');

  const { container: pass, input: passInput } = createInputComponent({
    label: 'Текущий пароль',
    attribute: {
      type: 'password',
      style: 'profile__form-input',
    },
  });
  const { container: newPass, input: newPassInput } = createInputComponent({
    label: 'Новый пароль',
    attribute: {
      type: 'password',
      style: 'profile__form-input',
    },
  });
  console.log(newPassInput, passInput);
  const bntCtnPass: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSavePass: HTMLElement = createButton('сохранить', () => {
    console.log('я работаю');
  });
  bntSavePass.setAttribute('disabled', 'true');
  bntCtnPass.append(bntSavePass);

  dataPass.append(pass, newPass, bntCtnPass);

  userProfile.append(titleProfile, dataProfile, titlePass, dataPass);
  dataCnt.append(userProfile);

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data !== null) {
      emailInput.setAttribute('value', `${userState.data?.email}`);
      nameInput.setAttribute('value', `${userState.data?.name}`);
      userState.data?.lastName && lastnameInput.setAttribute('value', `${userState.data?.lastName}`);
    }
  });

  return dataCnt;
};
