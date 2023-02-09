import { createElem } from 'src/utils/create-element';
import { renderSlider } from './components/Slider/Slider';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { genresData, mockData } from './mockData';
import { addListenerCollection, addListenerSlideDown } from './sliderActions';

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const subsHero: HTMLElement = renderHeroSection();
  mainContainer.append(subsHero);

  // TODO: Заменить на компоненты слайдеров
  const section1: HTMLElement = addListenerSlideDown(renderSlider(mockData, 'Слайдер 1'));
  const section2: HTMLElement = addListenerCollection(renderSlider(genresData, 'Слайдер 2'));
  const section3: HTMLElement = addListenerSlideDown(renderSlider(mockData, 'Слайдер 3'));

  main.append(mainContainer, section1, section2, section3);

  return main;
};
