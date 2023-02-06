import { createButton } from 'src/components/ui/Button/Button';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { createInputComponent } from '../../../Handlers/createInputeComponent';
import { handleChangeUserData } from '../../../Handlers/handlersChangeUserData';

export const renderProfileData = (): ReturnElements => {
  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Мой профиль';
  const data: HTMLElement = createElem('form', 'profile-info__data');

  const dataPerson = {
    name: '',
    // store.getState().auth.user.data?.name,
    lastName: '',
    //  store.getState().auth.user.data?.lastName,
  };

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

  nameInput.setAttribute('minLength', '3');

  const { container: lastname, input: lastnameInput } = createInputComponent({
    label: 'Фамилия',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });

  const bntCtn: HTMLElement = createElem('div', 'profile__btn-save');

  const bntSaveData: HTMLElement = createButton('сохранить', () => handleChangeUserData(dataPerson));
  bntSaveData.setAttribute('disabled', 'true');
  bntCtn.append(bntSaveData);

  nameInput.oninput = () => {
    if (nameInput.value.length > 3) {
      dataPerson.name = nameInput.value;
      bntSaveData.removeAttribute('disabled');
    } else bntSaveData.setAttribute('disabled', 'true');
    // console.log(nameInput.value);
  };

  lastnameInput.oninput = () => {
    if (lastnameInput.value.length > 3) {
      dataPerson.lastName = lastnameInput.value;
      bntSaveData.removeAttribute('disabled');
    } else bntSaveData.setAttribute('disabled', 'true');
  };

  lastnameInput.setAttribute('minLength', '3');

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
