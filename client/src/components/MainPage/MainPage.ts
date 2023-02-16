import { createElem, insertBefore } from 'src/utils/create-element';
// import { SLIDERS_ORDER } from 'src/const/main-page-data';
// import { isError } from 'src/utils/type-checkers';
import { store } from 'src/logic/redux';

import { REFERENC_DESCRIP, REFERENC_TITLE } from 'src/const/referens';
// import { top10Data } from 'src/const/top10-data';
import { galleryData } from 'src/const/gallery-data';
import { getSlider } from 'src/api/back/slider';
import { SLIDERS } from 'src/const/main-page-data';
import { renderSlider } from './components/Slider/Slider';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { addListenerSlideDown } from './sliderActions';
// import { genresData } from '../../const/genres-data';
import { Accordion } from '../ui/Accordion/Accordion';
import { renderInfiniteGallery } from './components/InfiniteGallery/InfiniteGallery';
import { renderDevices } from './components/Devices/Devices';
import { renderModal } from '../ui/ModalFilm/ModalFilm';

// import { getSlider } from 'src/api/back/slider';

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  const mainContainer: HTMLElement = createElem('div', 'main__container');

  const { container } = renderModal();

  const subsHero: HTMLElement = renderHeroSection();
  main.append(subsHero);

  main.append(mainContainer, container);

  // Слайдеры

  // const { viewType } = store.getState().uiConfig;

  // const slidersSet = SLIDERS[viewType];

  // slidersSet.map(async ({ displayedTitle, title }) => {
  //   try {
  //     const data = (await getSlider({ id: title, page: 1, limit: 10 })) as ResponseFindedFullMovies;

  //     const slider: HTMLElement = addListenerSlideDown(renderSlider(data.docs, displayedTitle, title));

  //     insertBefore({ node: slider, parentNode: main, siblingNumber: 3 });
  //   } catch (e) {
  //     console.log(e as ErrorMessage);
  //   }
  // });

  // SLIDERS_ORDER.forEach((el) => {
  //   const sliderData = data.find((item) => item.title === el.title);
  //   if (sliderData && !isError(sliderData.data)) {
  //     const slider: HTMLElement = addListenerSlideDown(renderSlider(sliderData.data.docs, el.displayedTitle, el.title));
  //     main.append(slider);
  //   }
  //   if (el.title === 'genres' && store.getState().user.personal.data) {
  //     const slider: HTMLElement = addListenerCollection(renderSlider(genresData, el.displayedTitle, el.title));
  //     main.append(slider);
  //   }
  //   if (el.title === 'top-10') {
  //     const slider: HTMLElement = addListenerTop10(renderSlider(top10Data, el.displayedTitle, el.title));
  //     main.append(slider);
  //   }
  // });

  const accordionSection: HTMLElement = createElem('div', 'accordion-section');
  const accordion: HTMLElement = createElem('div', 'accordion-container');
  accordionSection.append(accordion);
  Accordion(accordion, REFERENC_TITLE, REFERENC_DESCRIP);

  // !store.getState().user.personal.data &&
  //   main.append(renderDevices(), renderInfiniteGallery(galleryData), accordionSection, container);

  store.subscribe(() => {
    const userState = store.getState().user.personal;
    // рендерятся блоки для неавторизованных пользователей
    !userState.data && main.append(renderDevices(), renderInfiniteGallery(galleryData), accordionSection);
  });

  return main;
};
