import { createElem } from '../../../../utils/create-element';
import { renderSliderItem } from './SliderItem/SliderItem';
import { createSlideDown } from './SlideDownWindow/SlideDownWindow';
import styles from './Slider.module.scss';
import { createSliderBtn } from './SliderButton/SliderButton';

interface Ifilm {
  id: string;
  img: string;
  rating: string;
}

export const renderSlider = (filmsData: Ifilm[], slaiderName: string): HTMLElement => {
  const slider: HTMLElement = createElem('div', styles.slider);
  const header: HTMLElement = createElem('h3', styles.slider__header);
  const container: HTMLElement = createElem('div', styles.slider__container);
  const wrapper: HTMLElement = createElem('div', styles.slider__wrapper);
  const items: HTMLElement = createElem('div', styles.slider__items);
  const btnLeft: HTMLButtonElement = createSliderBtn('slider__btn__left', 'left');
  const btnRight: HTMLButtonElement = createSliderBtn('slider__btn__right', 'right');
  const slideDown: HTMLElement = createSlideDown();

  slider.dataset.id = String(Date.now());
  items.style.transform = `transform: translateX(0px);`;
  header.innerHTML = slaiderName;
  container.append(wrapper);
  wrapper.append(items, btnLeft, btnRight);
  slider.append(header, container, slideDown);

  const totalSlides: number = 11;
  let itemLeftPadding: number = 8;
  let position: number = 0;
  let itemWidth: number;
  let itemsSize: number;
  let prevSize: number;

  const arr: Ifilm[] = filmsData.length > totalSlides ? filmsData.slice(0, totalSlides) : filmsData;
  arr.forEach((element) => items.append(renderSliderItem(element.id, element.img, element.rating)));

  const changeSize = (): void => {
    items.classList.remove('translate-speed');
    if (itemsSize) {
      prevSize = itemsSize;
    }

    const width: number = window.innerWidth;

    switch (true) {
      case width <= 400:
        itemsSize = 1;
        break;
      case width <= 680:
        itemsSize = 2;
        break;
      case width <= 1140:
        itemsSize = 3;
        break;
      case width <= 1540:
        itemsSize = 4;
        break;
      default:
        itemsSize = 5;
        break;
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

  // Переделать
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

  slider.addEventListener('click', (event: Event): void => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget as HTMLElement;

    if (target.classList.contains('sliderItem__image')) {
      const allSliders = document.querySelectorAll('.slider');
      allSliders.forEach((elem) => elem.querySelector('.slideDown')?.classList.remove('show-slidedown'));
      currentTarget.querySelector('.slideDown')?.classList.add('show-slidedown');
      currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const item = target.closest('.sliderItem') as HTMLElement;

      currentTarget.querySelector('.slideDown')?.dispatchEvent(
        new CustomEvent('showFilmInfo', {
          detail: { id: item.dataset.id },
        })
      );
    }
  });

  return slider;
};
