import { createElem } from 'src/utils/create-element';
import { handleChangeTariff } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { validateCardNumber } from './Validators/validateCardNumber';
import { validateExpDate } from './Validators/validateExpDate';
import { validateCvc } from './Validators/validateCvc';

export const onSubmitCheckout = (e: Event): void => {
  e.preventDefault();

  const cardNumInput = document.getElementById('card-number') as HTMLInputElement;
  let cardNum = cardNumInput.value;
  cardNum = cardNum.replace(/ /g, '');
  const paymentSystem = validateCardNumber(cardNum);

  const cardExpInput = document.getElementById('expiration') as HTMLInputElement;
  const expNum = cardExpInput.value;

  const cardCvcInput = document.getElementById('cvc-cvv') as HTMLInputElement;
  const cardCvc = cardCvcInput.value;

  if (validateCardNumber(cardNum) && validateExpDate(expNum) && validateCvc(paymentSystem, cardCvc)) {
    // render success page
    const modal = document.querySelector('.checkout-modal') as HTMLElement;
    modal.innerHTML = '';
    const heading: HTMLElement = createElem('h2', 'checkout-modal__heading');
    heading.style.marginTop = '2rem';
    heading.innerHTML = 'Спасибо за заказ ヽ(•‿•)ノ На главную страницу через 3 сек';
    modal.append(heading);
    const overlay = document.querySelector('.checkout-modal__overlay') as HTMLElement;
    overlay.style.pointerEvents = 'none';
    handleChangeTariff({ tariff: 'premium' }); // обновляем данные пользователя на сервере

    let time = 3;
    setInterval((): void => {
      time--;
      heading.innerHTML = `Спасибо за заказ ヽ(•‿•)ノ На главную страницу через ${time} сек`;
      // return to main
      if (time === 0) window.location.href = '/';
    }, 1000);
  } else {
    if (!validateCardNumber(cardNum)) cardNumInput.classList.add('error');
    if (!validateExpDate(expNum)) cardExpInput.classList.add('error');
    if (!validateCvc(paymentSystem, cardCvc)) cardCvcInput.classList.add('error');

    if (!validateCardNumber(cardNum) || !validateExpDate(expNum) || !validateCvc(paymentSystem, cardCvc)) {
      // Animation
      const card = document.querySelector('.card') as HTMLElement;
      card.classList.remove('card__error-ani');
      // eslint-disable-next-line no-void
      void card.offsetWidth; // trigger a DOM reflow
      card.classList.add('card__error-ani');
    }
  }
};
