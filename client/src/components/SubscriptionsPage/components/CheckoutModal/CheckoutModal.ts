import { createElem } from 'src/utils/create-element';
import { countDateFromNow } from 'src/utils/count-date-from-now';
import { createButton } from 'src/components/ui/Button/Button';
import styles from './CheckoutModal.module.scss';
import { renderCard } from './components/CreditCard/CreditCard';
import { onSubmitCheckout } from './components/submitHandler';

export const renderCheckoutModalContent = (): HTMLElement => {
  const modalConent: HTMLElement = createElem('div', 'checkout-modal-cont');

  const heading: HTMLElement = createElem('h2', styles['checkout-modal__heading']);
  heading.innerHTML = 'Оформление подписки';

  const details: HTMLElement = createElem('div', 'checkout-modal__details');
  const details1: HTMLElement = createElem('span', 'checkout-modal__details-item');
  const details2: HTMLElement = createElem('span', 'checkout-modal__details-item_gradient');
  const details3: HTMLElement = createElem('span', 'checkout-modal__details-item');
  const payingDate = countDateFromNow(new Date(), 30).toLocaleString('ru-RU', {
    month: 'long',
    day: 'numeric',
  });
  details1.innerHTML = `Следующее списание ${payingDate}, сумма `;
  details2.innerHTML = `169 руб`;
  details3.innerHTML = '. Можно отменить в любой момент';
  details.append(details1, details2, details3);

  const checkoutForm: HTMLElement = createElem('form', 'checkout-modal__form');
  checkoutForm.setAttribute('autocomplete', 'on');
  checkoutForm.setAttribute('novalidate', 'true');

  const paymentBtn: HTMLElement = createButton('Оплтатить подписку', undefined, 'checkout-modal__confirm-btn');
  paymentBtn.setAttribute('type', 'submit');

  // CARD
  const card = renderCard();

  checkoutForm.append(card, paymentBtn);
  modalConent.append(heading, details, checkoutForm);

  checkoutForm.onsubmit = onSubmitCheckout;
  return modalConent;
};
