import { createButton } from 'src/components/ui/Button/Button';
import { showPass } from 'src/const/icons/icons';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { changeInputType } from '../../../Handlers/changeTypesInput';
import { createInputComponent } from '../../../Handlers/createInputeComponent';
import { handleChangeUserPassword } from '../../../Handlers/handlersChangeUserData';

export const renderProfileDataPass = (): ReturnElements => {
  const statePassword = {
    password: '',
    newPassword: '',
    repeatPass: '',
  };

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Смена пароля';

  const data: HTMLElement = createElem('div', 'profile-info__data');

  const {
    container: pass,
    input: passInput,
    icon: passIcon,
    label: passLabel,
  } = createInputComponent(
    {
      label: 'Текущий пароль',
      attribute: {
        type: 'password',
        style: 'profile__form-input',
        placeholder: 'Введите пароль',
      },
    },
    true,
    showPass
  );
  const {
    container: newPass,
    input: newPassInput,
    icon: newPassIcon,
    label: newPassLabel,
  } = createInputComponent(
    {
      label: 'Новый пароль',
      attribute: {
        type: 'password',
        style: 'profile__form-input',
        placeholder: 'Введите новый пароль',
      },
    },
    true,
    showPass
  );

  const {
    container: newPassRepet,
    input: newPassRepeatInput,
    icon: newPassRepeatIcon,
    label: newPassRepeatLabel,
  } = createInputComponent(
    {
      label: 'Повторите пароль',
      attribute: {
        type: 'password',
        style: 'profile__form-input',
        placeholder: 'Повторите новый пароль',
      },
    },
    true,
    showPass
  );

  (passIcon as HTMLElement).onclick = () => changeInputType(passInput);
  (newPassIcon as HTMLElement).onclick = () => changeInputType(newPassInput);
  (newPassRepeatIcon as HTMLElement).onclick = () => changeInputType(newPassRepeatInput);

  const arrInput = [newPassRepeatInput, passInput, newPassInput];

  const bntCtnPass: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSavePass: HTMLElement = createButton('сохранить', () => {
    if (statePassword.newPassword !== statePassword.repeatPass) {
      newPassRepeatLabel.innerHTML = 'Данные не совпадают';
      newPassLabel.innerHTML = 'Данные не совпадают';
      newPassRepet.classList.add('invalide-data');
      newPass.classList.add('invalide-data');
    } else {
      newPassRepeatLabel.innerHTML = 'Повторите пароль';
      newPassLabel.innerHTML = 'Новый пароль';
      newPassRepet.classList.remove('invalide-data');
      newPass.classList.remove('invalide-data');
      handleChangeUserPassword(statePassword, arrInput);
    }
  });
  bntSavePass.setAttribute('disabled', 'true');

  bntCtnPass.append(bntSavePass);

  passInput.oninput = () => {
    if (passInput.value.length >= 6) {
      statePassword.password = passInput.value;
      if (statePassword.newPassword !== '' && statePassword.password !== '') bntSavePass.removeAttribute('disabled');
    }
  };

  newPassInput.oninput = () => {
    if (newPassInput.value.length >= 6) {
      statePassword.newPassword = newPassInput.value;
      if (statePassword.repeatPass !== '' && statePassword.password !== '') bntSavePass.removeAttribute('disabled');
    }
  };

  newPassRepeatInput.oninput = () => {
    if (newPassRepeatInput.value.length >= 6) {
      statePassword.repeatPass = newPassRepeatInput.value;

      if (statePassword.newPassword !== '' && statePassword.password !== '') {
        bntSavePass.removeAttribute('disabled');
      }
    }
  };

  const success = createElem('div', 'change_password');
  // success.innerHTML = 'Пароль успешно обновлен';

  data.append(
    // success
    pass,
    newPass,
    newPassRepet,
    bntCtnPass,
    success
  );

  store.subscribe(() => {
    const userState = store.getState().auth.user.error;
    // console.log(userState?.message);

    console.log(store.getState().auth.user.isLoading);

    if (userState?.message) {
      passLabel.innerHTML = (userState as ErrorMessage).message;
      pass.classList.add('invalide-data');
    } else {
      passLabel.innerHTML = 'Текущий пароль';
      pass.classList.remove('invalide-data');
    }
  });

  return { title, data };
};
