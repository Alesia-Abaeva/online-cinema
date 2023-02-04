import { createElem } from '../../utils/create-element';
import { renderSlider } from './components/Slider/Slider';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { mockData } from './mockData';

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const subsHero: HTMLElement = renderHeroSection();
  mainContainer.append(subsHero);

  // TODO: Заменить на компоненты слайдеров
  const section2: HTMLElement = renderSlider(mockData, 'Слайдер 1');
  const section3: HTMLElement = renderSlider(mockData, 'Слайдер 2');

  main.append(mainContainer, section2, section3);

  return main;
};
