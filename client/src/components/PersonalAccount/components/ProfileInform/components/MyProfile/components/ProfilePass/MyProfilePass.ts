import { createButton } from 'src/components/ui/Button/Button';
import { createElem } from 'src/utils/create-element';
import { createInputComponent } from '../../../Handlers/createInputeComponent';

export const renderProfileDataPass = (): ReturnElements => {
  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Смена пароля';

  const data: HTMLElement = createElem('div', 'profile-info__data');

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

  const { container: newPassRepet, input: newPassRepetInput } = createInputComponent({
    label: 'Повторите пароль',
    attribute: {
      type: 'password',
      style: 'profile__form-input',
    },
  });

  console.log(newPassInput, passInput, newPassRepetInput);

  const bntCtnPass: HTMLElement = createElem('div', 'profile__btn-save');

  const bntSavePass: HTMLElement = createButton('сохранить', () => {
    console.log('я работаю');
  });

  bntSavePass.setAttribute('disabled', 'true');

  bntCtnPass.append(bntSavePass);

  data.append(pass, newPass, newPassRepet, bntCtnPass);

  return { title, data };
};
