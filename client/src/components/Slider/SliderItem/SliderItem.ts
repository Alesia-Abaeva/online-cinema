import { createElem } from '../../../utils/create-element';
import styles from './SliderItem.module.scss';

export const renderSliderItem = (id: number, name: string, img: string): HTMLElement => {
  const item: HTMLElement = createElem('div', styles.sliderItem);
  const wrapper: HTMLElement = createElem('div', styles.sliderItem__wrapper);
  const image: HTMLImageElement = document.createElement('img');
  image.classList.add('sliderItem__image');
  image.src = img;
  item.dataset.id = String(id);
  wrapper.append(image);
  item.append(wrapper);

  return item;
};
