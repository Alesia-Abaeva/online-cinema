import { createElem } from 'src/utils/create-element';
// import { handleChangeTariff } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { countDateFromNow } from 'src/utils/count-date-from-now';
import { createButton } from 'src/components/ui/Button/Button';
import styles from './CheckoutModal.module.scss';
import { renderCard } from './components/CreditCard/CreditCard';
import { toggleModal } from './components/ToggleModal';
import { onSubmitCheckout } from './components/submitHandler';

export const renderCheckoutModal = (): HTMLElement => {
  const modal: HTMLElement = createElem('div', styles['checkout-modal']);

  const heading: HTMLElement = createElem('h2', 'checkout-modal__heading');
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

  const closeModalBtn: HTMLElement = createElem('div', 'checkout-modal__close-btn');
  const closeIcon: HTMLElement = createElem('p', 'checkout-modal__close-icon');
  closeIcon.innerHTML = '╳';
  closeModalBtn.append(closeIcon);

  closeModalBtn.onclick = (): void => {
    const overlay = document.querySelector('.checkout-modal__overlay') as HTMLElement;
    toggleModal(modal, overlay);
  };

  const checkoutForm: HTMLElement = createElem('form', 'checkout-modal__form');
  checkoutForm.setAttribute('autocomplete', 'on');
  checkoutForm.setAttribute('novalidate', 'true');

  const paymentBtn: HTMLElement = createButton('Оплтатить подписку', undefined, 'checkout-modal__confirm-btn');
  paymentBtn.setAttribute('type', 'submit');

  // CARD
  const card = renderCard();

  checkoutForm.append(card, paymentBtn);
  modal.append(heading, details, closeModalBtn, checkoutForm);

  checkoutForm.onsubmit = onSubmitCheckout;
  return modal;
};
