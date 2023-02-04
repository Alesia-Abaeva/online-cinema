import styles from './SliderButton.module.scss';

export const createSliderBtn = (btnClass: string, direction: 'left' | 'right') => {
  const dir = direction === 'left' ? 0 : 180;
  const btn: HTMLButtonElement = document.createElement('button');

  const arrowSvg = `<svg class="slider-btn-arrow" width="17" height="36" viewBox="0 0 17 36" fill="none" xmlns="http://www.w3.org/2000/svg"  style="transform: rotate(${dir}deg);"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5001 17.9998L16.6001 3.1998L13.4001 0.799805L0.500097 17.9998L13.4001 35.1998L16.6001 32.7998L5.5001 17.9998Z"></path></svg>`;

  btn.innerHTML = arrowSvg;
  btn.classList.add(styles.slider__button);
  btn.classList.add(btnClass);

  if (direction === 'left') {
    btn.disabled = true;
    btn.classList.add('button-disabled');
  }

  return btn;
};
