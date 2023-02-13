import { createElem } from 'src/utils/create-element';
import styles from './Devices.module.scss';

export const renderDevices = (): HTMLElement => {
  const devices = createElem('div', styles.devices);
  const wrapper = createElem('div', 'devices__wrapper');
  const container = createElem('div', 'devices__container');
  const leftSide = createElem('div', 'devices__leftSide');
  const rightSide = createElem('div', 'devices__rightSide');
  const leftSideTitle = createElem('h3', 'devices__leftSide__title');
  leftSideTitle.innerHTML = 'На смартфоне и планшете';
  const leftSideText = createElem('p', 'devices__leftSide__text');
  leftSideText.innerHTML =
    'Установите приложение RS FILMS, чтобы смотреть фильмы и сериалы где угодно — даже без интернета.';

  leftSide.append(leftSideTitle, leftSideText);
  container.append(leftSide, rightSide);
  wrapper.append(container);
  devices.append(wrapper);

  return devices;
};
