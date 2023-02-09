import { createElem } from 'src/utils/create-element';
import styles from './ThemeSwitcher.module.scss';

export const renderThemeSwitcher = (): HTMLElement => {
  const themeSwitcher: HTMLElement = createElem('div', styles['theme-switcher']);

  const lightBtn: HTMLElement = createElem('button', 'theme-switcher__btn');
  lightBtn.id = 'light';
  const sunIcon: HTMLElement = createElem('div', 'theme-switcher__icon');
  sunIcon.classList.add('sun-icon');
  const lightBtnText: HTMLElement = createElem('span', 'theme-switcher__text');
  lightBtnText.innerHTML = 'Светлая';

  lightBtn.append(sunIcon, lightBtnText);

  const darkBtn: HTMLElement = createElem('button', 'theme-switcher__btn');
  darkBtn.id = 'dark';
  const moonIcon: HTMLElement = createElem('div', 'theme-switcher__icon');
  moonIcon.classList.add('moon-icon');
  const darkBtnText: HTMLElement = createElem('span', 'theme-switcher__text');
  darkBtnText.innerHTML = 'Темная';

  darkBtn.append(moonIcon, darkBtnText);

  const activeBtn = localStorage.getItem('theme') === 'light' ? lightBtn : darkBtn;
  activeBtn.classList.add('theme-switcher__btn_active');

  themeSwitcher.append(lightBtn, darkBtn);

  themeSwitcher.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    document.documentElement.setAttribute('data-theme', target.id);
    const btnPar = target.parentElement as HTMLElement;
    const btns = Array.from(btnPar.children);
    btns.forEach((el) => el.classList.remove('theme-switcher__btn_active'));
    target.classList.add('theme-switcher__btn_active');
    localStorage.setItem('theme', target.id);
  };

  return themeSwitcher;
};
