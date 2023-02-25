export const unlockSumbitBtn = () => {
  const reviewTitleInput = document.getElementById('review-form-title') as HTMLInputElement;
  const reviewTextInput = document.getElementById('review-from-text') as HTMLInputElement;
  const starsRatingCont = document.querySelector('.review-form__stars-rating') as HTMLElement;
  const reviewSubmitBtn = document.getElementById('review-form-submit') as HTMLButtonElement;

  if (
    reviewTitleInput.value.length >= 2 &&
    reviewTextInput.value.length >= 2 &&
    starsRatingCont.classList.contains('stars-set')
  ) {
    reviewSubmitBtn.removeAttribute('disabled');
    // (nameLabel as HTMLElement).innerHTML = 'Имя';
  } else {
    reviewSubmitBtn.setAttribute('disabled', 'true');
    // (nameLabel as HTMLElement).innerHTML = 'Имя должно быть не меньше 2 символов';
  }
};
