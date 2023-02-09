import { createElem } from 'src/utils/create-element';
import styles from './SliderItem.module.scss';

export const renderSliderItem = (id: number, img: string, rating?: string): HTMLElement => {
  const item: HTMLElement = createElem('div', styles.sliderItem);
  const wrapper: HTMLElement = createElem('div', styles.sliderItem__wrapper);
  const image: HTMLImageElement = document.createElement('img');

  image.classList.add('sliderItem__image');
  image.src = img;
  item.dataset.id = `${id}`;
  wrapper.append(image);

  if (rating) {
    const badget: HTMLElement = createElem('div', styles.sliderItem__badget);
    const badgetSpan: HTMLElement = createElem('span', styles.sliderItem__badget__raiting);
    badgetSpan.innerHTML = rating;
    badget.append(badgetSpan);
    wrapper.append(badget);
  }

  item.append(wrapper);

  return item;
};
