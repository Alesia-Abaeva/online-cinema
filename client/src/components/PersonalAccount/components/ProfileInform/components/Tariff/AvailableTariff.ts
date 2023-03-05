import { renderSubscriptions } from 'src/components/SubscriptionsPage/SubscriptionsPage';
import { createElem } from 'src/utils/create-element';
import { arrowBtn } from '../Handlers/arrow-btn';
import styles from './AvailableTariff.module.scss';

export const renderAvailibleTariff = () => {
  const userProfile: HTMLElement = createElem('div', 'profile-subscribe');

  const title: HTMLElement = createElem('h2', 'profile-info__title');
  title.innerHTML = 'Подсписки';

  const btn = arrowBtn();
  title.append(btn);

  const data: HTMLElement = createElem('div', styles['profile-info__data']);

  const tariff = renderSubscriptions();
  data.append(tariff);

  userProfile.append(title, data);

  return userProfile;
};
