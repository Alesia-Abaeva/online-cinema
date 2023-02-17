import { createElem } from 'src/utils/create-element';
import { SLIDERS_ORDER } from 'src/const/main-page-data';
import { isError } from 'src/utils/type-checkers';
import { REFERENC_DESCRIP, REFERENC_TITLE } from 'src/const/referens';
import { top10Data } from 'src/const/top10-data';
import { galleryData } from 'src/const/gallery-data';
import { renderSlider } from './components/Slider/Slider';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { addListenerCollection, addListenerSlideDown, addListenerTop10 } from './sliderActions';
import { genresData } from '../../const/genres-data';
import { Accordion } from '../ui/Accordion/Accordion';
import { renderInfiniteGallery } from './components/InfiniteGallery/InfiniteGallery';
import { renderDevices } from './components/Devices/Devices';
import { renderModal } from '../ui/ModalFilm/ModalFilm';

export const renderMainPage = (
  data: {
    title: string;
    data: ResponseFindedFullMovies | ErrorMessage;
  }[]
): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const { container } = renderModal();

  const subsHero: HTMLElement = renderHeroSection();
  main.append(subsHero);

  main.append(mainContainer);

  const slidersCont: HTMLElement = createElem('div', 'sliders-container');

  SLIDERS_ORDER.forEach((el) => {
    const sliderData = data.find((item) => item.title === el.title);
    if (sliderData && !isError(sliderData.data)) {
      const slider: HTMLElement = addListenerSlideDown(
        renderSlider(sliderData.data.docs, el.displayedTitle, el.title, 'slider'),
        'slider'
      );
      slidersCont.append(slider);
    }
    if (el.title === 'genres') {
      const slider: HTMLElement = addListenerCollection(
        renderSlider(genresData, el.displayedTitle, el.title, 'slider')
      );
      slidersCont.append(slider);
    }
    if (el.title === 'top-10') {
      const slider: HTMLElement = addListenerTop10(renderSlider(top10Data, el.displayedTitle, el.title, 'slider'));
      slidersCont.append(slider);
    }
  });
  main.append(slidersCont);
  const accordionSection: HTMLElement = createElem('div', 'accordion-section');
  const accordion: HTMLElement = createElem('div', 'accordion-container');
  accordionSection.append(accordion);

  Accordion(accordion, REFERENC_TITLE, REFERENC_DESCRIP);

  main.append(accordionSection, container);

  main.append(renderDevices());

  main.append(renderInfiniteGallery(galleryData));

  return main;
};
