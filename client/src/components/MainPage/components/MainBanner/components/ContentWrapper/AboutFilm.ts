import { createElem } from 'src/utils/create-element';
import { getReadableVotes, getReadableDuration } from 'src/utils/get-readable-data';
import { createBtnTrailer, createBtnInterest, createBtnWatch } from 'src/components/ui/Buttons/Buttons';
import styles from './AboutFilm.module.scss';

export const renderAboutFilm = (res: ResponseMovie): HTMLElement => {
  const btnSlice1 = createElem('div', styles.contentWrapper__actions__slice1);
  const btnSlice2 = createElem('div', styles.contentWrapper__actions__slice2);
  const buttons: HTMLElement = createElem('div', styles.contentWrapper__actions);
  const content: HTMLElement = createElem('div', styles.contentWrapper);

  const filmImg = res.backdrop ? res.backdrop.url : '';

  const btnWatch = createBtnWatch(res.id, filmImg) as HTMLButtonElement;
  const btnTrailer = createBtnTrailer(res) as HTMLButtonElement;
  const btnInterest = createBtnInterest(res.id) as HTMLButtonElement;

  const description = res.shortDescription ? res.shortDescription : res.description || '';
  const title =
    res.logo && res.logo.url ? `<img src="${res.logo.url}" alt="${res.name || 'image'}" />` : res.name || '';
  const raiting = res.rating.kp ? res.rating.kp.toFixed(1) : '';
  const votes = res.votes.kp ? getReadableVotes(res.votes.kp) : '';
  const ageRating = res.ageRating ? `${res.ageRating}+` : '';

  const aboutFilmTemplate = `
  <div class=${styles.contentWrapper__title}>
    <h1>${title}</h1>
  </div>
  <div class=${styles.contentWrapper__body}>
  <div class=${styles.contentWrapper__meta}>
    <div class=${styles.contentWrapper__meta__base}>
      <div class=${styles.contentWrapper__rating}>
        <div class=${styles.contentWrapper__rating__value}>
          ${raiting}
        </div>
        <div class=${styles.contentWrapper__rating__votes}>
          ${votes}
        </div>
      </div>
      <div class=${styles.contentWrapper__meta__main}>
        <div class=${styles.contentWrapper__year__genres}>
          <span>${res.year || ''}, ${res.genres[0] && res.genres[0].name ? res.genres[0].name : ''}, ${
    res.genres[1] && res.genres[1].name ? res.genres[1].name : ''
  }</span>
          <span>${res.countries[0] && res.countries[0].name ? res.countries[0].name : ''}</span>
          <span>${res.movieLength ? getReadableDuration(res.movieLength) : ''}</span>
          <span>${ageRating}</span>
        </div>
      </div>
    </div>
  </div>
  <p class=${styles.contentWrapper__short__description}>${description}</p>
  </div>
  `;

  content.innerHTML = aboutFilmTemplate;

  btnSlice1.append(btnWatch);
  btnSlice2.append(btnTrailer, btnInterest);
  buttons.append(btnSlice1, btnSlice2);
  content.append(buttons);

  return content;
};
