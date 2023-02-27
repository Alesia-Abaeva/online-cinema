import { createButton } from 'src/components/ui/Button/Button';
import { showPass } from 'src/const/icons/icons';
import { appDispatch, store } from 'src/logic/redux';
import { changePassword } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
import { changeInputType } from '../../../Handlers/changeTypesInput';
import { createInputComponent } from '../../../Handlers/createInputeComponent';

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

  const bntCtnPass: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSavePass: HTMLElement = createButton('сохранить', (event) => {
    event.preventDefault();
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
      appDispatch(changePassword(statePassword));
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

  data.append(pass, newPass, newPassRepet, bntCtnPass, success);

  store.subscribe(() => {
    const passwordState = store.getState().user.password;

    if (passwordState.isLoading) {
      bntSavePass.innerText = 'Загрузка';
    } else {
      bntSavePass.innerText = 'сохранить';
    }
  });

  store.subscribe(() => {
    const passwordState = store.getState().user.password;

    if (passwordState.error?.message) {
      passLabel.innerHTML = passwordState.error.message;
      return pass.classList.add('invalide-data');
    }

    if (passwordState.data?.message) {
      const arrInput = [newPassRepeatInput, passInput, newPassInput];

      passLabel.innerHTML = 'Текущий пароль';
      pass.classList.remove('invalide-data');
      success.innerHTML = 'Данные успешно обновлены ＼(￣▽￣)／';
      success.classList.add('active-pass-modal');
      arrInput.forEach((input) => {
        // eslint-disable-next-line no-param-reassign
        input.value = '';
      });

      setTimeout(() => {
        success.innerHTML = '';
        success.classList.remove('active-pass-modal');
      }, 2000); // показываем модалку
      return null;
    }
    return null;
  });

  return { title, data };
};
