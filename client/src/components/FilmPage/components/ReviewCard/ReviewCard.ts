import { renderModal } from 'src/components/ui/Modal/Modal';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { renderStarsRating } from 'src/components/ui/StarsRating/StarsRating';
import { createElem } from 'src/utils/create-element';
import styles from './ReviewCard.module.scss';

export interface IReviewCard {
  name: string;
  title: string;
  date: string;
  raiting: number;
  text: string;
}

export const userReview: IReviewCard = {
  name: 'Alexssssssssssssssssssss',
  title: 'Гнев зрительский',
  date: '24 февраля 2023',
  raiting: 9.1,
  text: 'Говорят, что среди известных режиссеров есть негласное правило, звучит оно примерно так — «один для себя, один для других». И тут имеется в виду, что на одном фильме они зарабатывают деньги, в угоду своим продюсерам и рекламодателям, а затем тратят эти деньги на такие прекрасные картины как «рок-н-рольщик», «револьвер», «джентльмены» и т.д. Про первые два шедевра «карты, деньги, 2 ствола» и «большой куш», я вообще молчу. Все эти фильмы приучили нас к невероятным сценарным поворотам, изящным разборкам и восхитительными диалогами. Ничего из этого не было в «Гнев человеческий». Эта картина в списке Гая Ричи, является абсолютной халтурой. В современном кинематографе есть очень мало таких же гениев своего ремесла, как Гай. И до поры до времени, кажется, что любые его произведения обязательны для просмотра. Но такое отношение к делу ставит под сомнение этот тезис.',
};

export const renderReviewCard = (data: IReviewCard): HTMLElement => {
  const reviewCard = createElem('div', styles.reviewCard);
  const wrapper = createElem('div', 'reviewCard__wrapper');
  const container = createElem('div', 'reviewCard__container');
  const content = createElem('div', 'reviewCard__content');
  const header = createElem('div', 'reviewCard__header');
  const text = createElem('p', 'reviewCard__text');
  const title = createElem('h3', 'reviewCard__title');
  const image = createElem('div', 'reviewCard__image');
  const headerInfo = createElem('div', 'reviewCard__headerInfo');
  const headerInfoData = createElem('div', 'reviewCard__headerInfoData');
  const name = createElem('div', 'reviewCard__name');
  const date = createElem('div', 'reviewCard__date');
  const stars = createElem('div', 'reviewCard__stars');

  const link = createElem('a', 'reviewCard__link');
  link.innerHTML = 'читать дальше';

  stars.append(renderStarsRating(Math.round(data.raiting), false));
  name.innerHTML = data.name.substring(0, 10);
  date.innerHTML = data.date;
  title.innerHTML = data.title;

  text.append(data.text);

  if (data.text.length > 160) {
    text.append(link);
    link.addEventListener('click', () => {
      const app = document.querySelector('#app') as HTMLElement;
      const modalContent = createElem('div', 'reviewCard__text__modal');
      modalContent.append(title);
      modalContent.append(data.text);
      const { modalFragment, modal, overlay } = renderModal(modalContent);
      app.append(modalFragment);
      setTimeout(() => toggleModal(modal, overlay), 0);
    });
  }

  headerInfoData.append(name, date);
  headerInfo.append(headerInfoData, stars);
  header.append(image, headerInfo);
  content.append(header, text);
  wrapper.append(content);
  container.append(wrapper);
  reviewCard.append(container);

  return reviewCard;
};
