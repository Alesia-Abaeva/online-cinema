import { renderAvatar } from 'src/components/Header/components/Account/components/Avatar/Avatar';
import { renderModal } from 'src/components/ui/Modal/Modal';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { renderStarsRating } from 'src/components/ui/StarsRating/StarsRating';
import { createElem } from 'src/utils/create-element';
import styles from './ReviewCard.module.scss';

export const renderReviewCard = (reviewData: GetReviews, userData: ReviewUser): HTMLElement => {
  const reviewCard = createElem('div', styles.reviewCard);
  const wrapper = createElem('div', 'reviewCard__wrapper');
  const container = createElem('div', 'reviewCard__container');
  const content = createElem('div', 'reviewCard__content');
  const header = createElem('div', 'reviewCard__header');
  const text = createElem('p', 'reviewCard__text');
  const movieTitle = createElem('h3', 'reviewCard__title');
  const headerInfo = createElem('div', 'reviewCard__headerInfo');
  const headerInfoData = createElem('div', 'reviewCard__headerInfoData');
  const name = createElem('div', 'reviewCard__name');
  const date = createElem('div', 'reviewCard__date');
  const stars = createElem('div', 'reviewCard__stars');

  const link = createElem('a', 'reviewCard__link');
  link.innerHTML = 'читать дальше';
  stars.append(renderStarsRating(Math.round(reviewData.stars), false));
  name.innerHTML = userData.name.length ? userData.name.split(' ')[0].substring(0, 12) : 'Гость';
  date.innerHTML = new Date(reviewData.createdAt).toLocaleString('ru-RU', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  text.append(reviewData.text);
  movieTitle.innerHTML = 'Название фильма';

  if (reviewData.text.length > 120) {
    text.append(link);
    link.addEventListener('click', () => {
      const app = document.querySelector('#app') as HTMLElement;
      const modalContent = createElem('div', 'reviewCard__modal');

      const movieTitleModal = createElem('h3', 'reviewCard__title');
      movieTitleModal.innerHTML = 'Название фильма';

      const textModal = createElem('p', 'reviewCard__text_modal');
      textModal.innerHTML = reviewData.text;

      modalContent.append(movieTitleModal, textModal);
      const { modalFragment, modal, overlay } = renderModal(modalContent, 'card-modal-size');
      app.append(modalFragment);
      setTimeout(() => toggleModal(modal, overlay), 0);
    });
  }

  headerInfoData.append(name, date);
  headerInfo.append(headerInfoData, movieTitle, stars);
  header.append(renderAvatar(), headerInfo);
  content.append(header, text);
  wrapper.append(content);
  container.append(wrapper);
  reviewCard.append(container);

  return reviewCard;
};
