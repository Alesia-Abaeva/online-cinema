import { createElem } from '../../../utils/create-element';
import styles from './SlideDownWindow.module.scss';

export const createSlideDown = (): HTMLElement => {
  const slideDown: HTMLElement = createElem('div', styles.slideDown);
  const template: string = `<div class="slideDown__wrapper">
  <div class="slideDown__container">
    <nav class="sliderDown__nav"></nav>
    <div class="sliderDown__card">
      <div class="sliderDown__card__title"></div>
      <div class="sliderDown__card__meta"></div>
      <div class="sliderDown__card__about"></div>
      <div class="sliderDown__card__controls"></div>
    </div>
  </div>
</div>`;

  slideDown.innerHTML = template;
  return slideDown;
};
