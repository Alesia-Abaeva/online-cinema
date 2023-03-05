import { toColletion } from 'src/const/icons/icons';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import styles from './SliderItemToCoollection.module.scss';

export const renderToCoolectionItem = (id: string, type: string) => {
  const item: HTMLElement = createElem('div', styles.toCoolectionItem);
  const wrapper: HTMLElement = createElem('div', 'toCoolectionItem__wrapper');
  const image = createElem('div', 'toCoolectionItem__image');
  const imageCircle = createElem('div', 'toCoolectionItem__imageCircle');
  const imageText = createElem('div', 'toCoolectionItem__imageText');
  imageText.innerHTML = 'Показать все';
  imageCircle.innerHTML = toColletion;

  image.append(imageCircle, imageText);
  item.addEventListener('click', () => {
    route(`/${type}/${id}`);
  });

  wrapper.append(image);
  item.append(wrapper);

  wrapper.style.aspectRatio = '9/13';

  return item;
};
