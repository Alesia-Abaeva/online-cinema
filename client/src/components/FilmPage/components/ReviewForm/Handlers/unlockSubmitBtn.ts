import { MAX_REVIEW_CHARACTERS } from 'src/const/max-review-characters';

export const unlockSumbitBtn = () => {
  const reviewTextInput = document.getElementById('review-from-text') as HTMLInputElement;
  const starsRatingCont = document.querySelector('.review-form__stars-rating') as HTMLElement;
  const reviewSubmitBtn = document.getElementById('review-form-submit') as HTMLButtonElement;
  const wordCounter = document.getElementById('review-word-counter') as HTMLElement;

  if (reviewTextInput.value.length >= 2 && starsRatingCont.classList.contains('stars-set')) {
    reviewSubmitBtn.removeAttribute('disabled');
  } else {
    reviewSubmitBtn.setAttribute('disabled', 'true');
  }

  wordCounter.innerHTML = `${MAX_REVIEW_CHARACTERS - reviewTextInput.value.length}`;
  MAX_REVIEW_CHARACTERS - reviewTextInput.value.length <= 15
    ? wordCounter.classList.add('danger')
    : wordCounter.classList.remove('danger');
};
