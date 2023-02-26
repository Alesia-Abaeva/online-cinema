import { bannerStarSvg } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import styles from './BannerRating.module.scss';

export const renderBannerRatung = (filmRating: number) => {
  const bannerRating = createElem('div', styles['bannerRating']);
  const content = createElem('div', 'bannerRating__content');
  const star = createElem('span', 'bannerRating__star');
  const rating = createElem('span', 'bannerRating__rating');

  star.innerHTML = bannerStarSvg;
  rating.innerHTML = String(Math.floor(filmRating));

  switch (true) {
    case filmRating >= 7:
      content.classList.add('bannerRating__green');
      break;

    case filmRating >= 5:
      content.classList.add('bannerRating__grey');
      break;

    default:
      content.classList.add('bannerRating__red');
      break;
  }

  content.append(star, rating);
  bannerRating.append(content);

  return bannerRating;
};
