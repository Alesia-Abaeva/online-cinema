import { createReview } from 'src/api/back/review';
import { MAX_REVIEW_CHARACTERS } from 'src/const/max-review-characters';
import { createElem } from 'src/utils/create-element';

export const onSubmitReview = async (e: Event, filmData: ResponseMovie) => {
  e.preventDefault();

  const reviewTextInput = document.getElementById('review-from-text') as HTMLInputElement;
  const reviewForm = document.getElementById('review-form') as HTMLFormElement;
  const reviewSubmitBtn = document.getElementById('review-form-submit') as HTMLButtonElement;
  const wordCounter = document.getElementById('review-word-counter') as HTMLElement;

  const starInputs = Array.from(document.querySelectorAll('.stars-rating__input')).slice(1) as HTMLInputElement[];

  const starInput = starInputs.find((el) => el.checked === true) as HTMLInputElement;

  const stars = starInput.value;
  const text = reviewTextInput.value;

  reviewForm.reset();
  wordCounter.innerHTML = `${MAX_REVIEW_CHARACTERS}`;
  reviewSubmitBtn.setAttribute('disabled', 'true');
  wordCounter.classList.remove('danger');

  try {
    const res = await createReview({ filmId: filmData.id.toString(), filmName: filmData.name, text, stars });
    const formMes: HTMLElement = createElem('div', 'review-form__message');
    formMes.innerHTML = `${res.data.message}`;
    reviewForm.append(formMes);

    setTimeout(() => {
      formMes.remove();
    }, 2000);
  } catch (err) {
    const formMes: HTMLElement = createElem('div', 'review-form__message');
    formMes.innerHTML = `${err}`;
    reviewForm.append(formMes);

    setTimeout(() => {
      formMes.remove();
    }, 2000);
  }
};
