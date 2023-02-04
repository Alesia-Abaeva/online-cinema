import { createButton } from 'src/components/ui/Button/Button';
import { createElem } from 'src/utils/create-element';
import { toggleModal } from '../CheckoutModal/components/ToggleModal';
import styles from './TariffCard.module.scss';

export const renderTariffCard = (data: SubsctiptionsPlan, id: number): HTMLElement => {
  const tariffCard: HTMLElement = createElem('div', styles['tariff-card']);
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

  cardHeader.append(cardTitle, cardLine, cardCost);

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
  tariffCard.append(cardHeader, cardBody);

  if (id === 1) {
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

  return tariffCard;
};
