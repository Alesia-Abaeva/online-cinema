import { createElem } from 'src/utils/create-element';
import { createInputElement } from 'src/components/ui/Input/Input';
import styles from './CreditCard.module.scss';
import { onCardNumberInput, onCvcInput, onExpDateInput } from './components/onInputCreditCard';

export const renderCard = (): HTMLElement => {
  // CARD
  const cardContainer: HTMLElement = createElem('div', 'checkout-modal__card');
  const card: HTMLElement = createElem('div', styles['card']);
  const logo: HTMLElement = createElem('div', 'card__logo');

  // Card number
  const cardNum: HTMLElement = createElem('div', 'card__input-container');
  const cardNumLabel: HTMLElement = createElem('label', 'card__input-label');
  cardNumLabel.innerHTML = 'Номер карты';

  const cardNumInput: HTMLElement = createInputElement({
    type: 'text',
    placeholder: '0000 0000 0000 0000',
    id: 'card-number',
  });
  cardNumInput.classList.remove('input');
  cardNumInput.classList.add('card__input');

  cardNumInput.oninput = onCardNumberInput;
  cardNum.append(cardNumLabel, cardNumInput);

  // Bottom
  const cardDateAndCVC: HTMLElement = createElem('div', 'card__bottom');

  // EXPIRATION
  const cardExp: HTMLElement = createElem('div', 'card__input-container');
  const cardExpLabel: HTMLElement = createElem('label', 'card__input-label');
  cardExpLabel.innerHTML = 'Срок действия';

  const cardExpInput: HTMLElement = createInputElement({
    type: 'text',
    placeholder: 'ММ / ГГ',
    id: 'expiration',
  });
  cardExpInput.classList.remove('input');
  cardExpInput.classList.add('card__input');

  cardExpInput.oninput = onExpDateInput;
  cardExp.append(cardExpLabel, cardExpInput);

  // CVC
  const cardCvc: HTMLElement = createElem('div', 'card__input-container');
  const cardCvcLabel: HTMLElement = createElem('label', 'card__input-label');
  cardCvcLabel.innerHTML = 'Проверочный код';

  const cardCvcInput: HTMLElement = createInputElement({
    type: 'number',
    placeholder: 'CVC',
    id: 'cvc-cvv',
  });

  cardCvcInput.classList.remove('input');
  cardCvcInput.classList.add('card__input');

  cardCvc.append(cardCvcLabel, cardCvcInput);

  cardCvcInput.oninput = onCvcInput;

  cardDateAndCVC.append(cardExp, cardCvc);

  card.append(logo, cardNum, cardDateAndCVC);
  cardContainer.append(card);
  return cardContainer;
};
