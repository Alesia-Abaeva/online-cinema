import { Iitem } from 'src/const/genres-data';
import { IitemTop10 } from 'src/const/top10-data';
import { createElem } from 'src/utils/create-element';
import { isGenres, isTop10 } from 'src/utils/type-checkers';
import styles from './SliderItem.module.scss';

export const renderSliderItem = (movie: ResponseMovie | Iitem | IitemTop10): HTMLElement => {
  const item: HTMLElement = createElem('div', styles.sliderItem);
  const wrapper: HTMLElement = createElem('div', styles.sliderItem__wrapper);
  const image: HTMLImageElement = document.createElement('img');

  const imgSvg: HTMLElement = createElem('div', styles.sliderItem__img__svg);

  const imgContainer: HTMLElement = createElem('div', styles.sliderItem__img__container);

  image.classList.add('sliderItem__image');

  if (isTop10(movie)) {
    item.classList.add('sliderItem__scale__behavior');
    const url = `${
      movie.img ? movie.img : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    image.src = url;
    image.classList.add('sliderItem__img__top10');
    item.dataset.id = `${movie.id}`;
    imgContainer.append(image);
    imgSvg.innerHTML = movie.numImg;
    wrapper.append(imgSvg, imgContainer);
  } else if (isGenres(movie)) {
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
