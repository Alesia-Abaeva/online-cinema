import { renderAvatar } from 'src/components/Header/components/Account/components/Avatar/Avatar';
import { renderModal } from 'src/components/ui/Modal/Modal';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { renderStarsRating } from 'src/components/ui/StarsRating/StarsRating';
import { createElem } from 'src/utils/create-element';
import { getDateFromTimestamp } from 'src/utils/get-date-from-timeStamp';
import styles from './ReviewCard.module.scss';

export const fakeUserReview: IReviewCard = {
  name: 'Alex ssssssssssssssssssss',
  title: 'Гнев зрительский',
  date: '2022-02-26T17:08:13.930Z',
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
  const headerInfo = createElem('div', 'reviewCard__headerInfo');
  const headerInfoData = createElem('div', 'reviewCard__headerInfoData');
  const name = createElem('div', 'reviewCard__name');
  const date = createElem('div', 'reviewCard__date');
  const stars = createElem('div', 'reviewCard__stars');

  const link = createElem('a', 'reviewCard__link');
  link.innerHTML = 'читать дальше';
  stars.append(renderStarsRating(Math.round(data.raiting), false));
  name.innerHTML = data.name.length ? data.name.split(' ')[0].substring(0, 12) : 'Гость';
  date.innerHTML = getDateFromTimestamp(data.date);
  title.innerHTML = data.title;
  text.append(data.text);

  if (data.text.length > 120) {
    text.append(link);
    link.addEventListener('click', () => {
      const app = document.querySelector('#app') as HTMLElement;
      const modalContent = createElem('div', 'reviewCard__text__modal');
      modalContent.append(title);
      modalContent.append(data.text);
      const { modalFragment, modal, overlay } = renderModal(modalContent, 'card-modal-size');
      app.append(modalFragment);
      setTimeout(() => toggleModal(modal, overlay), 0);
    });
  }

  headerInfoData.append(name, date);
  headerInfo.append(headerInfoData, stars);
  header.append(renderAvatar(), headerInfo);
  content.append(header, text);
  wrapper.append(content);
  container.append(wrapper);
  reviewCard.append(container);

  return reviewCard;
};
