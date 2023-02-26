import { createButton } from 'src/components/ui/Button/Button';
import { MAX_REVIEW_CHARACTERS } from 'src/const/max-review-characters';
import { createElem } from 'src/utils/create-element';
import { renderStarsRating } from '../../../ui/StarsRating/StarsRating';
import { onSubmitReview } from './Handlers/onSubmitReview';
import { unlockSumbitBtn } from './Handlers/unlockSubmitBtn';
import styles from './ReviewForm.module.scss';

export const renderReviewForm = (filmData: ResponseMovie): HTMLElement => {
  const reviewFormCont: HTMLElement = createElem('div', 'review-form-cont');

  const reviewFormTitle: HTMLElement = createElem('h2', 'id-page__about-title');
  reviewFormTitle.innerHTML = 'Оставить отзыв';

  const reviewForm: HTMLElement = createElem('form', styles['review-form']);
  reviewForm.id = 'review-form';

  const starsRating: HTMLElement = createElem('div', styles['stars-rating']);
  const starsRatingTitle: HTMLElement = createElem('h3', 'stars-rating__title');
  starsRatingTitle.innerHTML = 'Выберете вашу оценку';

  const starsRatingCont: HTMLElement = renderStarsRating(0, true);
  starsRatingCont.classList.add('review-form__stars-rating');

  starsRatingCont.onclick = () => {
    starsRatingCont.classList.add('stars-set');
    unlockSumbitBtn();
  };

  starsRating.append(starsRatingTitle, starsRatingCont);

  const textInputCont: HTMLElement = createElem('div', 'review-form__text-cont');

  const textInputLabel: HTMLElement = createElem('label', 'review-form__text-label');
  textInputLabel.innerHTML = 'Чтобы оценить фильм, необходимо написать сообщение к отзыву';

  const reviewTextInput = createElem('textarea', 'review-form__text-input') as HTMLTextAreaElement;
  reviewTextInput.setAttribute('placeholder', 'Текст');
  reviewTextInput.setAttribute('form', 'review-form');
  reviewTextInput.setAttribute('name', 'review-from-text');
  reviewTextInput.setAttribute('id', 'review-from-text');
  reviewTextInput.setAttribute('maxlength', `${MAX_REVIEW_CHARACTERS}`);
  reviewTextInput.classList.add('profile__form-input');
  reviewTextInput.classList.add('input');

  const wordCounter: HTMLElement = createElem('div', 'review-form__text-word-counter');
  wordCounter.id = 'review-word-counter';
  wordCounter.innerHTML = `${MAX_REVIEW_CHARACTERS}`;

  reviewTextInput.oninput = unlockSumbitBtn;

  textInputCont.append(textInputLabel, reviewTextInput, wordCounter);

  const reviewSubmitBtn: HTMLElement = createButton('Опубликовать', undefined, 'review-form__submit');
  reviewSubmitBtn.id = 'review-form-submit';
  reviewSubmitBtn.setAttribute('disabled', 'true');

  reviewForm.append(starsRating, textInputCont, reviewSubmitBtn);

  reviewSubmitBtn.onclick = (e: Event) => {
    onSubmitReview(e, filmData);
  };

  reviewFormCont.append(reviewFormTitle, reviewForm);
  return reviewFormCont;
};
