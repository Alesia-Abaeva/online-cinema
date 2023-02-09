import { renderSubscriptions } from 'src/components/SubscriptionsPage/SubscriptionsPage';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-but';
import styles from './AvailableTariff.module.scss';

export const renderAvailibleTariff = () => {
  const userProfile: HTMLElement = createElem('div', 'profile-promo');

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Подсписки';

  const btn = arrowBtn();
  title.append(btn);

  const data: HTMLElement = createElem('div', styles['profile-info__data']);

  const tariff = renderSubscriptions();
  data.append(tariff);

  userProfile.append(title, data);

  // TODO:  подписка на событие! и вывод результата в label
  return userProfile;
};
