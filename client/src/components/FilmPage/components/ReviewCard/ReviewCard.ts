import { createElem } from 'src/utils/create-element';
import styles from './ReviewCard.module.scss';

export interface IReviewCard {
  name: string;
  date: string;
  raiting: number;
  text: string;
}

export const userReview: IReviewCard = {
  name: 'Alex',
  date: '24 февраля 2023, 20:48',
  raiting: 9.1,
  text: 'Lorem',
};

export const renderReviewCard = (data: IReviewCard): HTMLElement => {
  const reviewCard = createElem('div', styles.reviewCard);
  const wrapper = createElem('div', 'reviewCard__wrapper');
  const container = createElem('div', 'reviewCard__container');
  const content = createElem('div', 'reviewCard__content');
  const header = createElem('div', 'reviewCard__header');
  const text = createElem('p', 'reviewCard__text');
  const image = createElem('div', 'reviewCard__image');
  const headerInfo = createElem('div', 'reviewCard__headerInfo');
  const headerInfoData = createElem('div', 'reviewCard__headerInfoData');
  const name = createElem('div', 'reviewCard__name');
  const date = createElem('div', 'reviewCard__date');
  const stars = createElem('div', 'reviewCard__stars'); // change

  name.innerHTML = data.name;
  date.innerHTML = data.date;

  headerInfoData.append(name, date);
  headerInfo.append(headerInfoData, stars);
  text.innerHTML = data.text;
  header.append(image, headerInfo);
  content.append(header, text);
  wrapper.append(content);
  container.append(wrapper);
  reviewCard.append(container);

  return reviewCard;
};
