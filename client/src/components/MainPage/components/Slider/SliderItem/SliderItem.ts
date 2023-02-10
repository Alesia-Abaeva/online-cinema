import { Iitem } from 'src/components/MainPage/mockData';
import { createElem } from 'src/utils/create-element';
import { isGenres } from 'src/utils/type-checkers';
import styles from './SliderItem.module.scss';

export const renderSliderItem = (movie: ResponseMovie | Iitem): HTMLElement => {
  const item: HTMLElement = createElem('div', styles.sliderItem);
  const wrapper: HTMLElement = createElem('div', styles.sliderItem__wrapper);
  const image: HTMLImageElement = document.createElement('img');

  image.classList.add('sliderItem__image');

  if (isGenres(movie)) {
    const url = `${
      movie.img ? movie.img : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    image.src = url;
    item.dataset.id = `${movie.id}`;
    wrapper.append(image);
  } else {
    const url = `${
      movie.poster
        ? movie.poster.previewUrl
        : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    image.src = url;
    item.dataset.id = `${movie.id}`;
    wrapper.append(image);

    if (movie.rating.kp) {
      const badget: HTMLElement = createElem('div', styles.sliderItem__badget);
      const badgetSpan: HTMLElement = createElem('span', styles.sliderItem__badget__raiting);
      badgetSpan.innerHTML = movie.rating.kp ? movie.rating.kp.toFixed(1) : '';
      badget.append(badgetSpan);
      wrapper.append(badget);
    }
  }

  item.append(wrapper);

  return item;
};
