import { createElem } from '../../utils/create-element';
import { renderSliderItem } from './SliderItem/SliderItem';
import { createSlideDown } from './SlideDownWindow/SlideDownWindow';
import styles from './Slider.module.scss';
import { createSliderBtn } from './SliderButton/SliderButton';

interface Ifilm {
  name: string;
  img: string;
}

export const renderSlider = (filmsData: Ifilm[], slaiderName: string): HTMLElement => {
  const slider: HTMLElement = createElem('div', styles.slider);
  const header: HTMLElement = createElem('h3', styles.slider__header);
  const wrapper: HTMLElement = createElem('div', styles.slider__wrapper);
  const items: HTMLElement = createElem('div', styles.slider__items);
  const btnLeft: HTMLButtonElement = createSliderBtn('slider__btn__left', 'left');
  const btnRight: HTMLButtonElement = createSliderBtn('slider__btn__right', 'right');
  const slideDown: HTMLElement = createSlideDown();
  items.style.transform = `transform: translateX(0px);`;
  header.innerHTML = slaiderName;
  slider.append(header, wrapper, slideDown);
  wrapper.append(items, btnLeft, btnRight);
  btnLeft.disabled = true;
  btnLeft.classList.add('button-disabled');

  const totalSlides: number = 11;
  let itemLeftPadding: number = 8;
  let position: number = 0;
  let itemWidth: number;
  let itemsSize: number;
  let prevSize: number;

  const arr: Ifilm[] = filmsData.length > totalSlides ? filmsData.slice(0, totalSlides) : filmsData;
  arr.forEach((element, id) => items.append(renderSliderItem(id, element.name, element.img)));

  const changeSize = (): void => {
    items.classList.remove('translate-speed');
    if (itemsSize) {
      prevSize = itemsSize;
    }
    if (window.innerWidth <= 400) {
      itemsSize = 1;
    } else if (window.innerWidth <= 680) {
      itemsSize = 2;
    } else if (window.innerWidth <= 1140) {
      itemsSize = 3;
    } else if (window.innerWidth <= 1540) {
      itemsSize = 4;
    } else {
      itemsSize = 5;
    }
    itemWidth = (wrapper.clientWidth * 100 - itemLeftPadding * (itemsSize - 1) * 100) / 100 / itemsSize;

    if (position > 0) {
      if (itemsSize !== prevSize) {
        position += prevSize - itemsSize;
      }
    }

    checkButtons();
    updateItemsOpacity();
    updateTranslate();
    items.classList.add('translate-speed');
  };

  const updateItemsOpacity = async (): Promise<void> => {
    btnLeft.disabled = true;
    btnRight.disabled = true;
    const itemsArr = Array.from(items.children);
    itemsArr.forEach((elem) => elem.classList.remove('item-opacity'));
    setTimeout(() => {
      itemsArr.splice(position, itemsSize);
      itemsArr.forEach((elem) => elem.classList.add('item-opacity'));
      btnLeft.disabled = false;
      btnRight.disabled = false;
    }, 1000);
  };

  const checkButtons = (): void => {
    if (position === 0) {
      btnLeft.disabled = true;
      btnLeft.classList.add('button-disabled');
    } else {
      btnLeft.disabled = false;
      btnLeft.classList.remove('button-disabled');
    }
    if (position + itemsSize >= totalSlides) {
      btnRight.disabled = true;
      btnRight.classList.add('button-disabled');
    } else {
      btnRight.disabled = false;
      btnRight.classList.remove('button-disabled');
    }
  };

  const updateTranslate = (): void => {
    const pad = position !== 0 ? itemLeftPadding : 0;
    items.style.transform = `translateX(${-position * itemWidth + pad * -position}px)`;
  };

  const handleClickBtnLeft = (): void => {
    if (position < itemsSize) {
      position = 0;
    } else {
      position -= itemsSize;
    }
    console.log('position', position);
    updateTranslate();
    checkButtons();
    updateItemsOpacity();
  };

  const handleClickBtnRight = (): void => {
    const nextSlides = totalSlides - (position + itemsSize);

    if (position + itemsSize <= totalSlides) {
      if (nextSlides < itemsSize) {
        position += nextSlides;
      } else {
        position += itemsSize;
      }
      console.log('position', position);
      updateTranslate();
      checkButtons();
      updateItemsOpacity();
    }
  };

  btnLeft.addEventListener('click', handleClickBtnLeft);
  btnRight.addEventListener('click', handleClickBtnRight);

  window.addEventListener('load', (): void => {
    changeSize();
  });

  window.addEventListener('resize', (): void => {
    changeSize();
  });

  return slider;
};
