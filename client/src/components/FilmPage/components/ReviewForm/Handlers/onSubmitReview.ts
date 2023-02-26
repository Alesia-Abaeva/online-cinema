import { MAX_REVIEW_CHARACTERS } from 'src/const/max-review-characters';
import { appDispatch } from 'src/logic/redux';
import { createReview } from 'src/logic/redux/actions';

export const onSubmitReview = async (e: Event, filmData: ResponseMovie) => {
  e.preventDefault();

  const reviewTextInput = document.getElementById('review-from-text') as HTMLInputElement;
  const reviewForm = document.getElementById('review-form') as HTMLFormElement;
  const reviewSubmitBtn = document.getElementById('review-form-submit') as HTMLButtonElement;
  const wordCounter = document.getElementById('review-word-counter') as HTMLElement;

  const starInputs = Array.from(document.querySelectorAll('.stars-rating__input')).slice(1) as HTMLInputElement[];

  const starInput = starInputs.find((el) => el.checked === true) as HTMLInputElement;

  const stars = +starInput.value;
  const text = reviewTextInput.value;

  reviewForm.reset();
  wordCounter.innerHTML = `${MAX_REVIEW_CHARACTERS}`;
  reviewSubmitBtn.setAttribute('disabled', 'true');
  wordCounter.classList.remove('danger');

  appDispatch(createReview({ filmId: filmData.id.toString(), filmName: filmData.name, text, stars }));
};
