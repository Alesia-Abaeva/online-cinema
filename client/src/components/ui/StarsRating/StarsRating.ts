import { createInputElement } from 'src/components/ui/Input/Input';
import { starIcon } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import styles from './StarsRating.module.scss';

export const renderStarsRating = (displayCount: number, clickable: boolean): HTMLElement => {
  const starsCont: HTMLElement = createElem('div', styles['stars-rating__cont']);
  !clickable && starsCont.classList.add('stars-rating__cont_disabled');

  const starsInputGeneral: HTMLInputElement = createInputElement({
    disabled: 'true',
    checked: 'true',
    style: 'stars-rating__input',
    name: 'rating',
    type: 'radio',
    value: '0',
    id: 'rating-none',
  });
  starsInputGeneral.classList.add('stars-rating__input-none');

  starsCont.append(starsInputGeneral);

  for (let i = 0; i < 10; i++) {
    const starsLabel: HTMLElement = createElem('label', 'stars-rating__label');
    starsLabel.setAttribute('for', `rating-${i + 1}`);
    starsLabel.innerHTML = starIcon;

    const starsInput: HTMLInputElement = createInputElement({
      style: 'stars-rating__input',
      name: 'rating',
      id: `rating-${i + 1}`,
      value: `${i + 1}`,
      type: 'radio',
    });
    starsInput.checked = displayCount - 1 === i;

    starsCont.append(starsLabel, starsInput);
  }
  return starsCont;
};
