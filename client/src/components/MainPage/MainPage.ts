import { createElem, insertBefore } from 'src/utils/create-element';
import { store } from 'src/logic/redux';
import { TOP10 } from 'src/const/top10-data';
import { REFERENC_DESCRIP, REFERENC_TITLE } from 'src/const/referens';
import { DATA_MAIN, SLIDERS, ViewType } from 'src/const/main-page-data';
import { galleryData } from 'src/const/gallery-data';
import { genresData } from 'src/const/genres-data';
import { renderHeroSection } from './components/HeroSection/HeroSection';
import styles from './MainPage.module.scss';
import { Accordion } from '../ui/Accordion/Accordion';
import { renderModal } from '../ui/ModalFilm/ModalFilm';
import { addListenerCollection, addListenerSlideDown, addListenerTop10 } from './sliderActions';
import { renderSlider } from './components/Slider/Slider';
import { renderInfiniteGallery } from './components/InfiniteGallery/InfiniteGallery';
import { renderDevices } from './components/Devices/Devices';

let viewType: ViewType;

const renderSliders = (main: HTMLElement) => {
  const state = store.getState();
  const currentView = state.uiConfig.viewType; // текущий вид
  const view = SLIDERS[currentView];
  const setSliders = state.sliders;

  // слайдеры
  const sliders = setSliders[currentView].map((filmsSet, index) => {
    const viewIndex = view[index];
    return addListenerSlideDown(
      renderSlider(filmsSet.docs, viewIndex.displayedTitle, viewIndex.title, 'slider'),
      'slider'
    );
  });

  sliders?.length && insertBefore({ nodes: sliders as HTMLElement[], parentNode: main, siblingNumber: 2 });
};

export const renderMainPage = (): HTMLElement => {
  const main: HTMLElement = createElem('main', styles['main']);
  main.classList.add('main_banner');
  // const mainContainer: HTMLElement = createElem('div', 'main__container');

  const { container } = renderModal(); // в модалке рендерится iframe только после нажатия кнопки

  const subsHero: HTMLElement = renderHeroSection();
  // mainContainer.append(subsHero);

  const infinitySlider = renderInfiniteGallery(galleryData);
  const deviceBanner = renderDevices();
  const sliderTop10 = addListenerTop10(
    renderSlider(TOP10, DATA_MAIN.TOP10.displayedTitle, DATA_MAIN.TOP10.title, 'slider')
  );
  const sliderGenre = addListenerCollection(
    renderSlider(genresData, DATA_MAIN.GENRE.displayedTitle, DATA_MAIN.GENRE.title, 'slider')
  );
  const accordionSection: HTMLElement = createElem('div', 'accordion-section');
  const accordion: HTMLElement = createElem('div', 'accordion-container');
  Accordion(accordion, REFERENC_TITLE, REFERENC_DESCRIP);
  accordionSection.append(accordion);

  main.append(subsHero, container);

  !store.getState().uiConfig.isAuth && main.append(deviceBanner, infinitySlider, accordionSection, container);

  renderSliders(main);

  if (store.getState().uiConfig.isAuth && store.getState().uiConfig.viewType === ViewType.USER) {
    insertBefore({ nodes: sliderGenre, parentNode: main, siblingNumber: 6 });
    insertBefore({ nodes: sliderTop10, parentNode: main, siblingNumber: 4 });
  }

  store.subscribe(() => {
    const state = store.getState();
    const currentView = state.uiConfig.viewType;

    // если текущий viewType совпадает с закешированным, значит слайдеры обновлять не надо
    if (viewType === currentView) {
      // если не изменяем вид, то ничего не делаем
      return null;
    }

    const setSliders = state.sliders;

    // Если баннеры загружены, значит отрисовываем их и актуализируем закешированный viewType
    if (setSliders[currentView].length) {
      renderSliders(main);

      viewType = currentView;
    }
    return null;
  });

  return main;
};
