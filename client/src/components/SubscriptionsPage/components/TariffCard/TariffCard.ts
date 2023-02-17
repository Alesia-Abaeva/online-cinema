import { createButton } from 'src/components/ui/Button/Button';
import { Tariff } from 'src/const/subscriptions-data';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { renderCheckoutModalContent } from '../CheckoutModal/CheckoutModal';
import { toggleModal } from '../../../ui/Modal/ToggleModal';
import styles from './TariffCard.module.scss';

export const renderTariffCard = (data: SubsctiptionsPlan, id: number, ids: string): HTMLElement => {
  const stateTariff = store.getState().user.personal.data?.tariff;
  const tariffCard: HTMLElement = createElem('div', styles['tariff-card']);
  tariffCard.id = ids;
  const cardHeader: HTMLElement = createElem('div', 'tariff-card__header');

  const cardTitle: HTMLElement = createElem('h2', 'tariff-card__title');
  cardTitle.innerHTML = data.title;

  const cardLine: HTMLElement = createElem('div', 'tariff-card__line');

  const cardCost: HTMLElement = createElem('div', 'tariff-card__cost');

  const cardCostAmount: HTMLElement = createElem('div', 'tariff-card__cost-amount');
  cardCostAmount.innerHTML = `${data.cost}`;

  const cardCostAmountDet: HTMLElement = createElem('div', 'tariff-card__cost-det');

  const cardCostCurrency: HTMLElement = createElem('span', 'tariff-card__cost-currency');
  cardCostCurrency.innerHTML = ' руб';
  const cardCostPeriod: HTMLElement = createElem('span', 'tariff-card__cost-period');
  cardCostPeriod.innerHTML = '/мес';

  cardCostAmountDet.append(cardCostCurrency, cardCostPeriod);

  cardCost.append(cardCostAmount, cardCostAmountDet);

  cardHeader.append(cardTitle, cardLine);

  const cardBody: HTMLElement = createElem('div', 'tariff-card__body');
  const cardList: HTMLElement = createElem('ul', 'tariff-card__list');
  cardBody.append(cardList);

  data.benefits.forEach((el) => {
    const cardBenefit: HTMLElement = createElem('li', 'tariff-card__list-item');
    if (el.included) cardBenefit.classList.add('tariff-card__list-item_included');
    else cardBenefit.classList.add('tariff-card__list-item_notincluded');
    cardBenefit.innerHTML = el.title;
    cardList.append(cardBenefit);
  });

  tariffCard.append(cardHeader, cardBody, cardCost);

  // TODO: ОПТИМИЗИРОВАТЬ!

  if ((stateTariff === Tariff.BASE || !stateTariff) && tariffCard.id === Tariff.PREMIUM) {
    // если у пользователя базовый тариф, рисуем кнопку оформить подписку
    const cardBtn: HTMLElement = createButton(
      'Оформить подиску',
      (): void => {
        const overlay = document.querySelector('.checkout-modal__overlay') as HTMLElement;
        const modal = document.querySelector('.checkout-modal') as HTMLElement;
        toggleModal(modal, overlay);
      },
      'tariff-card__btn'
    );
    tariffCard.append(cardBtn);
  }

  // если у пользователя базовый тариф, выделяем его
  if (stateTariff === Tariff.BASE && tariffCard.id === Tariff.BASE) {
    tariffCard.classList.add('active-base');
    const message = createElem('div', 'tariff-card__premium');
    message.innerHTML = 'Сейчас вы на этом тарифе (◕‿◕)';
    tariffCard.append(message);
  }

  // если у пользователя премиум подписка, убираем тариф для всех
  if (stateTariff === Tariff.PREMIUM && tariffCard.id === Tariff.BASE) {
    tariffCard.classList.add('hide-tariff');
  }

  // если у пользователя премиум подписка
  if (stateTariff === Tariff.PREMIUM && tariffCard.id === Tariff.PREMIUM) {
    tariffCard.classList.add('active-tariff');
    const message = createElem('div', 'tariff-card__premium');
    message.innerHTML = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  Поздравляем , вы в премиуме!';
    tariffCard.append(message);
  }

  store.subscribe(() => {
    const userState = store.getState().user.personal;

    if ((userState.data?.tariff === Tariff.BASE || !userState.data?.tariff) && tariffCard.id === Tariff.PREMIUM) {
      // если у пользователя базовый тариф, рисуем кнопку оформить подписку
      const cardBtn: HTMLElement = createButton(
        'Оформить подиску',
        (): void => {
          const overlay = document.querySelector('.checkout-modal__overlay') as HTMLElement;
          const modal = document.querySelector('.checkout-modal') as HTMLElement;
          toggleModal(modal, overlay);
        },
        'tariff-card__btn'
      );
      tariffCard.append(cardBtn);
    }

    // если у пользователя базовый тариф, выделяем его
    if (userState.data?.tariff === Tariff.BASE && tariffCard.id === Tariff.BASE) {
      tariffCard.classList.add('active-base');
      const message = createElem('div', 'tariff-card__premium');
      message.innerHTML = 'Сейчас вы на этом тарифе (◕‿◕)';
      tariffCard.append(message);
    }

    // если у пользователя премиум подписка, убираем тариф для всех
    if (userState.data?.tariff === Tariff.PREMIUM && tariffCard.id === Tariff.BASE) {
      tariffCard.classList.add('hide-tariff');
    }

    // если у пользователя премиум подписка
    if (userState.data?.tariff === Tariff.PREMIUM && tariffCard.id === Tariff.PREMIUM) {
      tariffCard.classList.add('active-tariff');
      const message = createElem('div', 'tariff-card__premium');
      message.innerHTML = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  Поздравляем , вы в премиуме!';
      tariffCard.append(message);
    }
  });

  return tariffCard;
};
