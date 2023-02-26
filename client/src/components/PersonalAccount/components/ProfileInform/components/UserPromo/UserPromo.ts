import { createButton } from 'src/components/ui/Button/Button';
import { createInputElement } from 'src/components/ui/Input/Input';
import { Tariff } from 'src/const/subscriptions-data';
import { appDispatch, store } from 'src/logic/redux';
import { activatePromocode, getPersonalPromocode } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './UserPromo.module.scss';

export const renderPromoGift = () => {
  const code2 = store.getState().promocodes.personal.data?.code;
  const title: HTMLElement = createElem('h2', 'profile-info__title-gift');
  title.innerHTML = 'Подарочек';

  const data: HTMLElement = createElem('div', 'profile-info__data-promo');
  const dataTitle: HTMLElement = createElem('h2', 'profile-promo__code');
  code2 && (dataTitle.innerHTML = code2);
  const dataDescroption: HTMLElement = createElem('div', 'profile-promo__code-description');
  dataDescroption.innerHTML = 'Мы приготовили для тебя персональный промокодик';

  store.subscribe(() => {
    const code = store.getState().promocodes.personal.data?.code;
    code && (dataTitle.innerHTML = code);
  });

  data.append(dataDescroption, dataTitle);
  return { title, data };
};

export const renderUserPromo = () => {
  store.getState().user.personal.data?.tariff !== Tariff.PREMIUM && appDispatch(getPersonalPromocode());
  // диспачим промокоды, только когда тариф не премиум

  let promo = '';

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
  label.innerHTML = ''; // здесь выводится ошибка или успех

  const formCnt = createElem('div', 'profile__promo-cnt');

  const input = createInputElement({ type: 'text', placeholder: 'Введите промокод' });
  const button = createButton('Получить подписку');
  button.setAttribute('disabled', 'true');

  input.oninput = () => {
    label.innerHTML = '';
    if (input.value.length >= 2) {
      button.removeAttribute('disabled');
      promo = input.value;
    } else button.setAttribute('disabled', 'true');
  };

  button.onclick = () => {
    appDispatch(activatePromocode(promo));
  };

  formCnt.append(input, button);
  container.append(label, formCnt);
  data.append(dataTitle, dataDescroption, container);
  userProfile.append(title, data);

  const { title: title1, data: data1 } = renderPromoGift();

  store.subscribe(() => {
    const code = store.getState().promocodes.personal.data?.code;

    if (code && !userProfile?.contains(data1)) {
      return userProfile.append(title1, data1);
    }

    if (!code && userProfile?.contains(title1) && userProfile?.contains(data1)) {
      userProfile.removeChild(title1);
      userProfile.removeChild(data1);
    }

    return null;
  });

  store.subscribe(() => {
    const activationState = store.getState().promocodes.activation;
    label.innerHTML = activationState.isLoading ? 'Загрузка' : ' ';

    if (activationState.data) {
      label.innerHTML = activationState.data.message;
      label.style.color = '#8e54e9';
    }

    if (activationState.error) {
      label.innerHTML = activationState.error.message;
      label.style.color = '#fc3f1d';
    }
  });

  return userProfile;
};
