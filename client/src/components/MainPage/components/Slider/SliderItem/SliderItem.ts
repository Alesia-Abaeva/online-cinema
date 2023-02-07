import { createElem } from '../../../../../utils/create-element';
import styles from './SliderItem.module.scss';

export const renderSliderItem = (id: string, img: string, rating: string): HTMLElement => {
  const item: HTMLElement = createElem('div', styles.sliderItem);
  const wrapper: HTMLElement = createElem('div', styles.sliderItem__wrapper);
  const badget: HTMLElement = createElem('div', styles.sliderItem__badget);
  const badgetSpan: HTMLElement = createElem('span', styles.sliderItem__badget__raiting);
  const image: HTMLImageElement = document.createElement('img');

  badgetSpan.innerHTML = rating;
  badget.append(badgetSpan);
  image.classList.add('sliderItem__image');
  image.src = img;
  item.dataset.id = id;
  wrapper.append(image, badget);
  item.append(wrapper);

  return item;
};
