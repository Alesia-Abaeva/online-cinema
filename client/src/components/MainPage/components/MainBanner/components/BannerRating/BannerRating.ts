import { setRatingColor } from 'src/components/ui/RatingColor/RatingColor';
import { bannerStarSvg } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import styles from './BannerRating.module.scss';

export const renderBannerRating = (filmRating: number) => {
  const bannerRating = createElem('div', styles['bannerRating']);
  const content = createElem('div', 'bannerRating__content');
  const star = createElem('span', 'bannerRating__star');
  const rating = createElem('span', 'bannerRating__rating');

  star.innerHTML = bannerStarSvg;
  rating.innerHTML = String(Math.floor(filmRating));

  content.append(star, rating);

  bannerRating.append(setRatingColor(content, filmRating, 'background'));

  return bannerRating;
};
