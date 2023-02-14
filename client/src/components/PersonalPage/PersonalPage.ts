// import { SLIDERS_ORDER } from 'src/const/main-page-data';
import { createElem } from 'src/utils/create-element';
import styles from './PersonalPage.module.scss';

export const renderPersonal = (): HTMLElement => {
  const main: HTMLElement = createElem('main', 'main');
  const mainContainer: HTMLElement = createElem('div', 'main__container');
  const mainContent: HTMLElement = createElem('div', styles['personal']);

  // SLIDERS_ORDER.forEach((el) => {
  //   const sliderData = data.find((item) => item.title === el.title);
  //   if (sliderData && !isError(sliderData.data)) {
  //     const slider: HTMLElement = addListenerSlideDown(renderSlider(sliderData.data.docs, el.displayedTitle, el.title));
  //     main.append(slider);
  //   }
  //   if (el.title === 'genres') {
  //     const slider: HTMLElement = addListenerCollection(renderSlider(genresData, el.displayedTitle, el.title));
  //     main.append(slider);
  //   }
  //   if (el.title === 'top-10') {
  //     const slider: HTMLElement = addListenerTop10(renderSlider(top10Data, el.displayedTitle, el.title));
  //     main.append(slider);
  //   }
  // });

  // mainContent.append();

  mainContainer.append(mainContent);
  main.append(mainContainer);

  return main;
};
