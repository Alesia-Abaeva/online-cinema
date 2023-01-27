import { createElem } from '../../utils/create-element';
import styles from './Header.module.scss';

export const renderHeader = (): HTMLElement => {
  const header: HTMLElement = createElem('header', 'header');

  const headerContainer: HTMLElement = createElem('div', 'header__container');

  const logo: HTMLElement = createElem('div', 'header__logo');
  const logoLink: HTMLElement = createElem('a', styles['header-logo__link']);
  logoLink.setAttribute('href', '/');

  logo.append(logoLink);

  headerContainer.append(logo);
  header.append(headerContainer);

  return header;
};
