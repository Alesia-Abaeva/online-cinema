import { route } from 'src/router/route';
import { createSlideDown } from './components/Slider/SlideDownWindow/SlideDownWindow';

export const addListenerSlideDown = (slider: HTMLElement, type: string): HTMLElement => {
  const slideDown: HTMLElement = createSlideDown();
  slider.append(slideDown);
  slider.addEventListener('click', (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget as HTMLElement;

    if (target.classList.contains('slider__header')) {
      const parent = target.closest('.slider') as HTMLElement;
      route(`/${type}/${parent.dataset.id}`);
    }
    if (target.classList.contains('filmDetails__link')) {
      const parent = target.closest('.filmDetails__link') as HTMLElement;
      route(`/films/${parent.dataset.id}`);
    }
    if (target.classList.contains('filmDetails__person__link')) {
      route(`/name/${target.dataset.id}`);
    }
    if (target.classList.contains('sliderItem__image')) {
      const allSliders = document.querySelectorAll('.slider');
      allSliders.forEach(
        async (elem): Promise<void> => elem.querySelector('.slideDown')?.classList.remove('show-slidedown')
      );
      currentTarget.querySelector('.slideDown')?.classList.add('show-slidedown');
      const item = target.closest('.sliderItem') as HTMLElement;
      currentTarget.querySelector('.slideDown')?.dispatchEvent(
        new CustomEvent('showFilmInfo', {
          detail: { id: item.dataset.id },
        })
      );

      setTimeout(() => {
        item.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  });

  return slider;
};

export const addListenerCollection = (slider: HTMLElement): HTMLElement => {
  slider.addEventListener('click', async (event: Event): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;

    if (target.classList.contains('sliderItem__image')) {
      const parent = target.closest('.sliderItem') as HTMLElement;
      route(`/collection/${parent.dataset.id}`);
    }
  });

  return slider;
};

export const addListenerTop10 = (slider: HTMLElement): HTMLElement => {
  slider.addEventListener('click', async (event: Event): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const parent = target.closest('.sliderItem') as HTMLElement;
    if (parent) {
      route(`/films/${parent.dataset.id}`);
    }
  });

  return slider;
};
