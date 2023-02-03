import { createElem } from '../../../utils/create-element';
import styles from './SlideDownWindow.module.scss';

export const createSlideDown = (mok: string): HTMLElement => {
  const slideDown: HTMLElement = createElem('div', styles.slideDown);
  const wrapper: HTMLElement = createElem('div', styles.slideDown__wrapper);
  const btnClose: HTMLElement = createElem('div', styles.slideDown__close);

  btnClose.innerHTML = ` <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="${styles.slideDown__close__img}"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.303 11.999 4.15 5.847 5.848 4.15 12 10.302 18.15 4.15l1.697 1.697L13.697 12l6.151 6.151-1.697 1.697L12 13.696l-6.152 6.151-1.697-1.697L10.303 12Z"></path></svg>`;

  // const template: string = `
  // <div class="slideDown__container">
  //   <nav class="sliderDown__nav"></nav>
  //   <div class="sliderDown__card">
  //     <div class="sliderDown__card__title"></div>
  //     <div class="sliderDown__card__meta"></div>
  //     <div class="sliderDown__card__about"></div>
  //     <div class="sliderDown__card__controls"></div>
  //   </div>
  // </div>`;

  slideDown.append(wrapper);
  wrapper.style.backgroundImage = `url(${mok})`;
  wrapper.append(btnClose);

  btnClose.addEventListener('click', () => {
    slideDown.classList.remove('show-slidedown');
  });

  return slideDown;
};
