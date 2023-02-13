import { createButton } from 'src/components/ui/Button/Button';
import { createInputElement } from 'src/components/ui/Input/Input';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
// import { createInputComponent } from '../Handlers/createInputeComponent';
import styles from './UserPromo.module.scss';

export const renderUserPromo = () => {
  const userProfile: HTMLElement = createElem('div', styles['profile-promo']);

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Промокоды';

  const btn = arrowBtn();
  title.append(btn);

  const data: HTMLElement = createElem('div', 'profile-info__data');
  const dataTitle: HTMLElement = createElem('h2', 'profile-promo__title');
  dataTitle.innerHTML = 'Получите подписку на кино, сериалы и мультфильмы';
  const dataDescroption: HTMLElement = createElem('div', 'profile-promo__description');
  dataDescroption.innerHTML = 'Открой для себя полный доступ в мир кино!';

  const container: HTMLElement = createElem('div', 'promo-cnt');
  const label = createElem('label', 'profile__form-label');
  label.innerHTML = 'Промокод';
  const formCnt = createElem('div', 'profile__promo-cnt');

  const input = createInputElement({ type: 'text', placeholder: 'Введите промокод' });
  const button = createButton('Получить подписку');
  button.setAttribute('disabled', 'true');

  input.oninput = () => {
    if (input.value.length >= 4) {
      button.removeAttribute('disabled');
    } else button.setAttribute('disabled', 'true');
  };

  formCnt.append(input, button);
  container.append(label, formCnt);
  data.append(dataTitle, dataDescroption, container);
  userProfile.append(title, data);

  // TODO:  подписка на событие! и вывод результата в label
  return userProfile;
};
