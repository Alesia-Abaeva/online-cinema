import { createButton } from 'src/components/ui/Button/Button';
import { createInputElement } from 'src/components/ui/Input/Input';
import { createElem } from 'src/utils/create-element';
import styles from './ReviewForm.module.scss';

export const renderReviewForm = (): HTMLElement => {
  const reviewFormCont: HTMLElement = createElem('div', styles['review-form-cont']);

  const reviewFormTitle: HTMLElement = createElem('h2', 'id-page__about-title');
  reviewFormTitle.innerHTML = 'Написать реценизию';

  const reviewForm: HTMLElement = createElem('form', 'review-form');
  reviewForm.id = 'review-form';

  // stars

  const reviewTitleInput: HTMLInputElement = createInputElement({
    type: 'text',
    placeholder: 'Заголовок',
    name: 'review-form-title',
    style: 'review-form__title-input',
    spellcheck: 'false',
  });
  reviewTitleInput.classList.add('profile__form-input');

  const reviewTextInput = createElem('textarea', 'review-form__text-input') as HTMLTextAreaElement;
  reviewTextInput.setAttribute('placeholder', 'Текст');
  reviewTextInput.setAttribute('form', 'review-form');
  reviewTextInput.setAttribute('name', 'review-from-text');
  reviewTextInput.classList.add('profile__form-input');
  reviewTextInput.classList.add('input');

  const reviewSubmitBtn: HTMLElement = createButton('Опубликоварть рецензию', undefined, 'review-form__submit');
  reviewSubmitBtn.setAttribute('disabled', 'true');

  reviewForm.append(reviewTitleInput, reviewTextInput, reviewSubmitBtn);

  reviewFormCont.append(reviewFormTitle, reviewForm);
  return reviewFormCont;
};
