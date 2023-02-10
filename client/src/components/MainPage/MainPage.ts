import { createElem } from 'src/utils/create-element';
import { SLIDERS_ORDER } from 'src/const/main-page-data';
import { isError } from 'src/utils/type-checkers';
import { renderSlider } from './components/Slider/Slider';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { addListenerCollection, addListenerSlideDown } from './sliderActions';
import { genresData } from './mockData';

export const renderMainPage = (
  data: {
    title: string;
    data: ResponseFindedFullMovies | ErrorMessage;
  }[]
): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const subsHero: HTMLElement = renderHeroSection();
  mainContainer.append(subsHero);

  main.append(mainContainer);

  SLIDERS_ORDER.forEach((el) => {
    const sliderData = data.find((item) => item.title === el.title);
    if (sliderData && !isError(sliderData.data)) {
      const slider: HTMLElement = addListenerSlideDown(renderSlider(sliderData.data.docs, el.displayedTitle));
      main.append(slider);
    }
    if (el.title === 'genres') {
      const slider: HTMLElement = addListenerCollection(renderSlider(genresData, el.displayedTitle));
      main.append(slider);
    }
  });

  return main;
};
