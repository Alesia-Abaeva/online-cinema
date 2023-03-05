import { createButton } from 'src/components/ui/Button/Button';
import { renderModal } from 'src/components/ui/Modal/Modal';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { Tariff } from 'src/const/subscriptions-data';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { renderCheckoutModalContent } from '../CheckoutModal/CheckoutModal';
import styles from './TariffCard.module.scss';

export const updateTariffCard = (parent: HTMLElement, state: string | undefined) => {
  if ((state === Tariff.BASE || !state) && parent.id === Tariff.PREMIUM) {
    // если у пользователя базовый тариф, рисуем кнопку оформить подписку
    const cardBtn: HTMLElement = createButton(
      'Оформить подиску',
      (): void => {
        const main = document.querySelector('.main') as HTMLElement;
        const { modalFragment, modal, overlay } = renderModal(renderCheckoutModalContent());
        main.append(modalFragment);
        setTimeout(() => toggleModal(modal, overlay), 0);
      },
      'tariff-card__btn'
    );
    parent.append(cardBtn);
  }

  // если у пользователя базовый тариф, выделяем его
  if (state === Tariff.BASE && parent.id === Tariff.BASE) {
    parent.classList.add('active-base');
    const message = createElem('div', 'tariff-card__premium');
    message.innerHTML = 'Сейчас вы на этом тарифе (◕‿◕)';
    parent.append(message);
  }

  // если у пользователя премиум подписка, убираем тариф для всех
  if (state === Tariff.PREMIUM && parent.id === Tariff.BASE) {
    parent.classList.add('hide-tariff');
  }

  // если у пользователя премиум подписка
  if (state === Tariff.PREMIUM && parent.id === Tariff.PREMIUM) {
    parent.classList.add('active-tariff');
    const message = createElem('div', 'tariff-card__premium');
    message.innerHTML = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧  Поздравляем , вы в премиуме!';
    parent.append(message);
  }
};

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
  updateTariffCard(tariffCard, stateTariff);

  store.subscribe(() => {
    const userState = store.getState().user.personal.data?.tariff;
    updateTariffCard(tariffCard, userState);
  });

  return tariffCard;
};
