import { createButton } from 'src/components/ui/Button/Button';
import { showPass } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import { changeInputType } from '../../../Handlers/changeTypesInput';
import { createInputComponent } from '../../../Handlers/createInputeComponent';

export const renderProfileDataPass = (): ReturnElements => {
  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Смена пароля';

  const statePassword = {
    password: '',
    newPass: '',
    repeatPass: '',
  };

  const data: HTMLElement = createElem('div', 'profile-info__data');

  const {
    container: pass,
    input: passInput,
    icon: passIcon,
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
  const bntSavePass: HTMLElement = createButton('сохранить', () => {
    console.log('я работаю', newPassIcon, passIcon);
  });

  bntSavePass.setAttribute('disabled', 'true');

  bntCtnPass.append(bntSavePass);

  passInput.oninput = () => {
    if (passInput.value.length > 6) {
      statePassword.password = passInput.value;
    }
  };

  newPassInput.oninput = () => {
    if (newPassInput.value.length > 6) {
      statePassword.newPass = newPassInput.value;
    }
  };

  newPassRepeatInput.oninput = () => {
    if (newPassRepeatInput.value.length > 6) {
      statePassword.repeatPass = newPassRepeatInput.value;
    }
  };

  data.append(pass, newPass, newPassRepet, bntCtnPass);

  return { title, data };
};
