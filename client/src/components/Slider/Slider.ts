import { createElem } from '../../utils/create-element';
import { renderSliderItem } from './SliderItem/SliderItem';
import styles from './Slider.module.scss';
import { createSliderBtn } from './SliderButton/SliderButton';

interface Ifilm {
  name: string;
  img: string;
}

export const renderSlider = (filmsData: Ifilm[], sliderName: string): HTMLElement => {
  const slider: HTMLElement = createElem('div', styles.slider);
  const header: HTMLElement = createElem('h3', styles.slider__header);
  const wrapper: HTMLElement = createElem('div', styles.slider__wrapper);
  const items: HTMLElement = createElem('div', styles.slider__items);

  const btnLeft: HTMLButtonElement = createSliderBtn('slider-btn-left', 'left');
  const btnRight: HTMLButtonElement = createSliderBtn('slider-btn-right', 'right');
  header.innerHTML = sliderName;
  slider.append(header);
  slider.append(wrapper);
  wrapper.append(items);
  wrapper.append(btnLeft);
  wrapper.append(btnRight);

  const totalSlides = 11;
  let itemsSize: number = 5;
  let slidesBack = 0;

  items.style.transform = `transform: translateX(0px);`;

  let itemLeftPadding = 8;
  let itemWidth: number;

  const changeReMove = (): void => {
    if (window.innerWidth <= 400) {
      itemsSize = 1;
    } else if (window.innerWidth <= 680) {
      itemsSize = 2;
    } else if (window.innerWidth <= 1240) {
      itemsSize = 3;
    } else if (window.innerWidth <= 1640) {
      itemsSize = 4;
    } else {
      itemsSize = 5;
    }
    itemWidth = (wrapper.clientWidth * 100 - itemLeftPadding * (itemsSize - 1) * 100) / 100 / itemsSize;
    updateOnResize();
  };

  const updateOnResize = () => {
    if (Math.abs(slidesBack) + itemsSize <= totalSlides) {
      slidesBack -= totalSlides - (Math.abs(slidesBack) + itemsSize);
    } else if (Math.abs(slidesBack) + itemsSize > totalSlides) {
      slidesBack += Math.abs(slidesBack) + itemsSize - totalSlides;
    }
  };

  const updateSize = () => {
    const pad = slidesBack !== 0 ? itemLeftPadding : 0;
    items.style.transform = `translateX(${slidesBack * itemWidth + pad * slidesBack}px)`;
  };

  const handleClickBtnLeft = (): void => {
    if (Math.abs(slidesBack) < itemsSize) {
      slidesBack = 0;
    } else {
      slidesBack += itemsSize;
      console.log('slidesb', slidesBack);
    }
    updateSize();
  };

  const handleClickBtnRight = (): void => {
    const nextSlides = totalSlides - (Math.abs(slidesBack) + itemsSize);

    if (Math.abs(slidesBack) + itemsSize <= totalSlides) {
      if (nextSlides < itemsSize) {
        slidesBack -= nextSlides;
      } else {
        slidesBack -= itemsSize;
      }
      console.log('slidesb', slidesBack);
      updateSize();
    }
  };

  window.addEventListener('resize', () => {
    changeReMove();
    updateSize();
  });

  const arr: Ifilm[] = filmsData.length > 11 ? filmsData.slice(0, 11) : filmsData;
  arr.forEach((element, id) => items.append(renderSliderItem(id, element.name, element.img)));

  btnLeft.addEventListener('click', handleClickBtnLeft);
  btnRight.addEventListener('click', handleClickBtnRight);

  window.addEventListener('load', () => {
    changeReMove();
    updateSize();
  });

  return slider;
};
