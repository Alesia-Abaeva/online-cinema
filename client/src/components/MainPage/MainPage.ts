import { createElem } from '../../utils/create-element';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const subsHero: HTMLElement = renderHeroSection();
  mainContainer.append(subsHero);

  // TODO: Заменить на компоненты слайдеров
  const section2: HTMLElement = createElem('section', styles['subs-hero']);
  section2.classList.add('hero-black');
  const title2: HTMLElement = createElem('h1', 'subs-hero__title');
  title2.innerHTML = 'Слайдер 1';
  section2.append(title2);

  const section3: HTMLElement = createElem('section', styles['subs-hero']);
  section3.classList.add('hero-black-black');
  const title3: HTMLElement = createElem('h1', 'subs-hero__title');
  title3.innerHTML = 'Слайдер 2';
  section3.append(title3);

  main.append(mainContainer, section2, section3);
  return main;
};
