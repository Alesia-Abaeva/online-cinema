import { createButton } from 'src/components/ui/Button/Button';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../../../Handlers/arrow-btn';
import { createInputComponent } from '../../../Handlers/createInputeComponent';
import { handleChangeUserData } from '../../../Handlers/handlersChangeUserData';

export const renderProfileData = (): ReturnElements => {
  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Мой профиль';
  const btn = arrowBtn();

  title.append(btn);
  const data: HTMLElement = createElem('form', 'profile-info__data');

  const dataPerson: Commons = {
    name: '',
    lastName: '',
  };

  const { container: email, input: emailInput } = createInputComponent({
    label: 'Моя почта',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });
  emailInput.setAttribute('disabled', 'true'); // почту менять нельзя!

  const {
    container: name,
    input: nameInput,
    label: nameLabel,
  } = createInputComponent({
    label: 'Имя',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });
  nameInput.setAttribute('minLength', '2');

  const {
    container: lastname,
    input: lastnameInput,
    label: lastnameLabel,
  } = createInputComponent({
    label: 'Фамилия',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });
  lastnameInput.setAttribute('minLength', '2');

  const bntCtn: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSaveData: HTMLElement = createButton('сохранить', () => handleChangeUserData(dataPerson));
  bntSaveData.setAttribute('disabled', 'true');
  bntCtn.append(bntSaveData);

  nameInput.oninput = () => {
    if (nameInput.value.length >= 2) {
      dataPerson.name = nameInput.value;
      bntSaveData.removeAttribute('disabled');
      (nameLabel as HTMLElement).innerHTML = 'Имя';
    } else {
      bntSaveData.setAttribute('disabled', 'true');
      (nameLabel as HTMLElement).innerHTML = 'Имя должно быть не меньше 2 символов';
    }
  };

  lastnameInput.oninput = () => {
    if (lastnameInput.value.length >= 2) {
      dataPerson.lastName = lastnameInput.value;
      bntSaveData.removeAttribute('disabled');
      (lastnameLabel as HTMLElement).innerHTML = 'Фамилия';
    } else {
      bntSaveData.setAttribute('disabled', 'true');
      (lastnameLabel as HTMLElement).innerHTML = 'Фамилия должна быть не меньше 2 символов';
    }
  };

  data.append(email, name, lastname, bntCtn);

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data !== null) {
      emailInput.setAttribute('value', `${userState.data?.email}`);
      nameInput.setAttribute('value', `${userState.data?.name}`);
      userState.data?.lastName && lastnameInput.setAttribute('value', `${userState.data?.lastName}`);
    }
  });

  return { title, data };
};
