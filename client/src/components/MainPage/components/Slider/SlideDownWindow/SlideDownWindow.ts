import { createElem } from 'src/utils/create-element';
import { renderMainBanner } from '../../MainBanner/MainBanner';
import styles from './SlideDownWindow.module.scss';

export const createSlideDown = (): HTMLElement => {
  const slideDown: HTMLElement = createElem('div', styles.slideDown);
  const wrapper: HTMLElement = createElem('div', styles.slideDown__wrapper);
  const btnClose: HTMLElement = createElem('div', styles.slideDown__close);

  const closeSvg = ` <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="${styles.slideDown__close__img}"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.303 11.999 4.15 5.847 5.848 4.15 12 10.302 18.15 4.15l1.697 1.697L13.697 12l6.151 6.151-1.697 1.697L12 13.696l-6.152 6.151-1.697-1.697L10.303 12Z"></path></svg>`;

  btnClose.innerHTML = closeSvg;

  slideDown.append(wrapper, btnClose);

  slideDown.addEventListener('showFilmInfo', async (e: CustomEventInit) => {
    const filmID = e.detail.id;
    const banner = await renderMainBanner(filmID);
    wrapper.innerHTML = '';
    wrapper.append(banner);
  });

  btnClose.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    const slider = target.closest('.slideDown') as HTMLElement;
    const sliderContent = slider.firstElementChild as HTMLElement;

    slider.classList.remove('show-slidedown');
    setTimeout(() => {
      sliderContent.innerHTML = '';
    }, 500);
  });

  return slideDown;
};
