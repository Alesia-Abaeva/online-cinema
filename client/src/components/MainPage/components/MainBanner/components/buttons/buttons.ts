import { createButton } from 'src/components/ui/Button/Button';
import { bookmarkIcon, threeDotsIcon, watchFilmIcon } from 'src/const/icons/icons';
import styles from './buttons.module.scss';

const watchFilmContent = `${watchFilmIcon}Смотреть фильм`;

export const createBtnWatch = () => {
  const btnWatch = createButton(
    watchFilmContent,
    (): void => {
      console.log('Film');
    },
    `${styles.actionBtn}`
  ) as HTMLButtonElement;
  btnWatch.classList.add(`${styles.actionBtn__film}`);
  return btnWatch;
};

export const createBtnTrailer = () => {
  const btnTrailer = createButton(
    'Трейлер',
    (): void => {
      console.log('Trailer');
    },
    `${styles.actionBtn}`
  ) as HTMLButtonElement;
  btnTrailer.classList.add(`${styles.actionBtn__trailer}`);
  return btnTrailer;
};

export const createBtnBookmark = () => {
  const btnBookmark = createButton(
    bookmarkIcon,
    (): void => {
      console.log('Bookmark');
    },
    `${styles.actionBtn}`
  ) as HTMLButtonElement;
  btnBookmark.classList.add(`${styles.actionBtn__round}`);
  return btnBookmark;
};

export const createBtnInterest = () => {
  const btnInterest = createButton(
    threeDotsIcon,
    (): void => {
      console.log('Interest');
    },
    `${styles.actionBtn}`
  ) as HTMLButtonElement;
  btnInterest.classList.add(`${styles.actionBtn__round}`);
  return btnInterest;
};

export const createBtnTabAboutFilm = () => {
  const btnTabAboutFilm = createButton(
    'О фильме',
    (): void => {
      console.log('AboutFilm');
    },
    `${styles.tabBtn}`
  ) as HTMLButtonElement;
  return btnTabAboutFilm;
};

export const createBtnTabDetails = () => {
  const btnTabDetails = createButton(
    'Детали',
    (): void => {
      console.log('Details');
    },
    `${styles.tabBtn}`
  ) as HTMLButtonElement;
  return btnTabDetails;
};
