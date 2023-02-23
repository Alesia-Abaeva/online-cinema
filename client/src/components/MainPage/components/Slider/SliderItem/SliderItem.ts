import { setRatingColor } from 'src/components/ui/RatingColor/RatingColor';
import { Iitem } from 'src/const/genres-data';
import { createElem } from 'src/utils/create-element';
import { isGenres, isTop10 } from 'src/utils/type-checkers';
import styles from './SliderItem.module.scss';

export const renderSliderItem = (movie: ResponseMovie | Iitem | IitemTop10): HTMLElement => {
  const item: HTMLElement = createElem('div', styles.sliderItem);
  const wrapper: HTMLElement = createElem('div', styles.sliderItem__wrapper);
  const image = createElem('img', styles.sliderItem__image) as HTMLImageElement;
  image.classList.add('skeleton');

  if (isTop10(movie)) {
    const imgSvg: HTMLElement = createElem('div', styles.sliderItem__img__svg);
    const imgTop10: HTMLImageElement = createElem('img', styles.sliderItem__img__top10) as HTMLImageElement;
    const imgTop10Container: HTMLElement = createElem('div', styles.sliderItem__img__top10container);
    const imgtop10wrapper: HTMLElement = createElem('div', styles.sliderItem__img__top10wrapper);

    item.classList.add('sliderItem__scale__behavior');
    const url = `${
      movie.img ? movie.img : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;

    imgTop10.src = url;
    item.dataset.id = `${movie.id}`;
    imgTop10Container.append(imgTop10);
    imgSvg.innerHTML = movie.numImg;
    imgtop10wrapper.append(imgSvg, imgTop10Container);
    wrapper.append(imgtop10wrapper);

    wrapper.style.aspectRatio = '12/9';
  } else if (isGenres(movie)) {
    const url = `${
      movie.img ? movie.img : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    image.src = url;
    item.dataset.id = `${movie.id}`;
    wrapper.append(image);

    wrapper.style.aspectRatio = '1.2/1';
  } else {
    const url = `${
      movie.poster
        ? movie.poster.previewUrl
        : 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'
    }`;
    if (!movie.poster) image.style.filter = 'invert(100%)';
    image.src = url;
    item.dataset.id = `${movie.id}`;
    wrapper.append(image);

    if (movie.rating.kp) {
      const badget: HTMLElement = createElem('div', styles.sliderItem__badget);
      const badgetSpan: HTMLElement = createElem('span', styles.sliderItem__badget__raiting);
      const ratingValue = movie.rating.kp;
      badgetSpan.innerHTML = ratingValue ? ratingValue.toFixed(1) : '';
      const coloredBage: HTMLElement = setRatingColor(badget, ratingValue, 'background');
      coloredBage.append(badgetSpan);
      wrapper.append(coloredBage);
    }

    wrapper.style.aspectRatio = '9/13';
  }

  item.append(wrapper);

  return item;
};
