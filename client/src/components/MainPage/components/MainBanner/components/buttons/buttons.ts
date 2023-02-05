import { createButton } from 'src/components/ui/Button/Button';
import styles from './buttons.module.scss';

const btnWatchText = `<svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" data-tid="b6d52236"><path d="M6 3.375L21 12L6 20.625V3.375Z" fill="white"></path></svg>Смотреть фильм`;

export const btnWatch = createButton(
  btnWatchText,
  (): void => {
    console.log('Film');
  },
  `${styles.actionBtn}`
) as HTMLButtonElement;
btnWatch.classList.add(`${styles.actionBtn__film}`);

export const btnTrailer = createButton(
  'Трейлер',
  (): void => {
    console.log('Trailer');
  },
  `${styles.actionBtn}`
) as HTMLButtonElement;
btnTrailer.classList.add(`${styles.actionBtn__trailer}`);

const btnBookmarkSvg = `<svg width="24px" height="24px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-tid="5a8f7f74"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.05 13.5V9.3h4.575V5.7H28.05V1.125h-3.6V5.7h-4.2v3.6h4.2v4.2h3.6ZM11.475 5.625h4.275v3.6h-4.275v16.353l4.868-2.524 1.657-.86 1.657.86 4.868 2.524V18h3.6v13.5l-3.6-1.867L18 26.25l-6.525 3.383-3.6 1.867V5.625h3.6Z"></path></svg>`;

export const btnBookmark = createButton(
  btnBookmarkSvg,
  (): void => {
    console.log('Bookmark');
  },
  `${styles.actionBtn}`
) as HTMLButtonElement;
btnBookmark.classList.add(`${styles.actionBtn__round}`);

const btnInterestkSvg = `<svg width="2.4rem" height="2.4rem" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-tid="c83b9934"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"></path></svg>`;

export const btnInterest = createButton(
  btnInterestkSvg,
  (): void => {
    console.log('Interest');
  },
  `${styles.actionBtn}`
) as HTMLButtonElement;
btnInterest.classList.add(`${styles.actionBtn__round}`);

export const btnTabAboutFilm = createButton(
  'О фильме',
  (): void => {
    console.log('AboutFilm');
  },
  `${styles.tabBtn}`
) as HTMLButtonElement;

export const btnTabDetails = createButton(
  'Детали',
  (): void => {
    console.log('Details');
  },
  `${styles.tabBtn}`
) as HTMLButtonElement;
