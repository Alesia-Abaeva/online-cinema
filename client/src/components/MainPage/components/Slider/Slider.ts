import { createElem } from 'src/utils/create-element';
import { IitemTop10 } from 'src/const/top10-data';
import { renderUserWatchEmpty } from 'src/components/PersonalAccount/components/ProfileInform/components/UserWatch/UserWatch';
import { renderSliderItem } from './SliderItem/SliderItem';
import styles from './Slider.module.scss';
import { createSliderBtn } from './SliderButton/SliderButton';
import { Iitem } from '../../../../const/genres-data';
import { renderToCoolectionItem } from './SliderItem/ToCoolectionItem/SliderItemToCoollection';

export const renderSlider = (
  filmsData: ResponseMovie[] | Iitem[] | IitemTop10[],
  slaiderName: string,
  id: string,
  type: string
): HTMLElement => {
  const slider: HTMLElement = createElem('div', styles.slider);
  const header: HTMLElement = createElem('h3', styles.slider__header);
  if (id === 'genres') header.classList.add('slider__header_disabled');
  const container: HTMLElement = createElem('div', styles.slider__container);
  const wrapper: HTMLElement = createElem('div', styles.slider__wrapper);
  const items: HTMLElement = createElem('div', styles.slider__items);
  const btnLeft: HTMLButtonElement = createSliderBtn('slider__btn__left', 'left');
  const btnRight: HTMLButtonElement = createSliderBtn('slider__btn__right', 'right');

  slider.dataset.id = id;
  items.style.transform = `transform: translateX(0px);`;

  container.append(wrapper);
  wrapper.append(items, btnLeft, btnRight);
  slider.append(header, container);

  if (id === 'top-10') {
    const titleImg = createElem('div', 'slider__header__img');
    header.classList.add('slider__header_disabled');
    header.append(titleImg);
  } else {
    header.innerHTML = slaiderName;
  }

  let totalSlides = filmsData.length;

  if (filmsData.length === 0) {
    const sliderEmpty = renderUserWatchEmpty(
      'Добавить можно нажав на ... на фильме или посмотрев его для недавно просмотренных'
    );
    header.classList.add('slider__header_disabled');
    sliderEmpty.classList.add('slider-empty');
    slider.append(sliderEmpty);
  }

  const itemLeftPadding = 8;
  let position = 0;
  let itemWidth: number;
  let itemsSize: number;
  let prevSize: number;

  const arr: ResponseMovie[] | Iitem[] | IitemTop10[] = filmsData.slice(0);
  arr.forEach((element) => items.append(renderSliderItem(element)));

  if (id !== 'top-10' && id !== 'genres' && filmsData.length !== 0) {
    items.append(renderToCoolectionItem(id, type));
    totalSlides += 1;
  }

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
      case width <= 1040:
        itemsSize = 3;
        break;
      case width <= 1440:
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

  setTimeout(() => {
    changeSize();
  }, 0);

  return slider;
};
