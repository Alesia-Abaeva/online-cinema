import { createElem } from 'src/utils/create-element';
import { SLIDERS_ORDER } from 'src/const/main-page-data';
import { isError } from 'src/utils/type-checkers';
import { REFERENC_DESCRIP, REFERENC_TITLE } from 'src/const/referens';
import { top10Data } from 'src/const/top10-data';
import { renderSlider } from './components/Slider/Slider';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { addListenerCollection, addListenerSlideDown, addListenerTop10 } from './sliderActions';
import { genresData } from '../../const/genres-data';
import { Accordion } from '../ui/Accordion/Accordion';
import { renderDevices } from './components/Devices/Devices';

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
      const slider: HTMLElement = addListenerSlideDown(renderSlider(sliderData.data.docs, el.displayedTitle, el.title));
      main.append(slider);
    }
    if (el.title === 'genres') {
      const slider: HTMLElement = addListenerCollection(renderSlider(genresData, el.displayedTitle, el.title));
      main.append(slider);
    }
    if (el.title === 'top-10') {
      const slider: HTMLElement = addListenerTop10(renderSlider(top10Data, el.displayedTitle, el.title));
      main.append(slider);
    }
  });
  const accordionSection: HTMLElement = createElem('div', 'accordion-section');
  const accordion: HTMLElement = createElem('div', 'accordion-container');
  accordionSection.append(accordion);

  Accordion(accordion, REFERENC_TITLE, REFERENC_DESCRIP);

  main.append(accordionSection);

  main.append(renderDevices());

  return main;
};
