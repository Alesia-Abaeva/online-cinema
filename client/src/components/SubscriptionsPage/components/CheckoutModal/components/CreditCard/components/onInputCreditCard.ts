/* eslint-disable no-useless-escape */
/* eslint-disable no-param-reassign */
import { validateCardNumber } from '../../Validators/validateCardNumber';
import { validateExpDate } from '../../Validators/validateExpDate';

export const onCardNumberInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  const card = document.querySelector('.card') as HTMLElement;
  const logo = document.querySelector('.card__logo') as HTMLElement;
  target.classList.remove('error');
  card.classList.remove('card__error-ani');
  const inputValue = target.value;

  target.value = inputValue
    .replace(/[^\d]+/g, '')
    .replace(/\W/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
  if (inputValue.length > 19) target.value = inputValue.slice(0, 19);

  if (inputValue[0] === '5') {
    logo.className = 'card__logo card__logo_mastercard';
  } else if (inputValue[0] === '4') {
    logo.className = 'card__logo card__logo_visa';
  } else if (inputValue.slice(0, 2) === '34' || inputValue.slice(0, 2) === '37') {
    logo.className = 'card__logo card__logo_amex';
  } else {
    logo.className = 'card__logo';
  }
  validateCardNumber(inputValue);
};

export const onExpDateInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  target.classList.remove('error');

  const inputValue = target.value;

  target.value = inputValue
    .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
    .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
    .replace(/^([0-1])([3-9])$/g, '0$1/$2')
    .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
    .replace(/^([0]+)\/|[0]+$/g, '0')
    .replace(/[^\d\/]|^[\/]*$/g, '')
    .replace(
      /\//g,
      (
        (i) => (m: string) =>
          !i++ ? m : ''
      )(0)
    )
    .trim();
  if (inputValue.length > 5) target.value = inputValue.slice(0, 5);
  validateExpDate(inputValue);
};

export const onCvcInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  target.classList.remove('error');
  const inputValue = target.value;

  target.value = inputValue.replace(/[^\d]/g, '').trim();

  const cardNumInput = document.getElementById('card-number') as HTMLInputElement;
  let cardNum = cardNumInput.value;
  cardNum = cardNum.replace(/ /g, '');
  const paymentSystem = validateCardNumber(cardNum);

  if (paymentSystem === 'amex') {
    if (inputValue.length > 4) target.value = inputValue.slice(0, 4);
  } else if (inputValue.length > 3) target.value = inputValue.slice(0, 3);
};
