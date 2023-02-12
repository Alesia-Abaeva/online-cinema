import { renderOverlay } from 'src/components/Overlay/Overlay';
import { createButton } from 'src/components/ui/Button/Button';
import { bookmarkIcon, threeDotsIcon, watchFilmIcon } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import { removeOverlay } from 'src/utils/remove-overlay';
import { renderButtonDropdown } from '../ButtonDropdown/ButtonDropdown';
import { closeDropdown } from '../ButtonDropdown/Handlers/close-dropdown';
import styles from './buttons.module.scss';

const watchFilmContent = `${watchFilmIcon}Смотреть фильм`;

export const createBtnWatch = () => {
  const btnWatch = createButton(watchFilmContent) as HTMLButtonElement;
  btnWatch.classList.add(`${styles.actionBtn__film}`, `${styles.actionBtn}`);
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
  const btnWrapper: HTMLElement = createElem('div', 'action-btn-wrapper');
  const btnInterest = createButton(threeDotsIcon, undefined, `${styles.actionBtn}`) as HTMLButtonElement;
  btnInterest.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const wrapper = target.parentElement as HTMLElement;
    const dropDown: HTMLElement = renderButtonDropdown();
    wrapper.append(dropDown);
    const overlay = renderOverlay(() => {
      closeDropdown();
      removeOverlay('dropdown-overlay');
    }, 'dropdown-overlay');
    wrapper.append(overlay);
  };
  btnInterest.classList.add(`${styles.actionBtn__round}`);
  btnWrapper.append(btnInterest);
  return btnWrapper;
};

export const createBtnTabAboutFilm = () => {
  const btnTabAboutFilm = createButton(
    'О фильме',
    (): void => {
      console.log('AboutFilm');
    },
    `${styles.tabBtn}`
  ) as HTMLButtonElement;
  btnTabAboutFilm.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const container = target.closest('.mainBanner__container') as HTMLElement;
    const banner = container.firstElementChild as HTMLElement;
    banner.classList.remove('background-blur');
  };
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
  btnTabDetails.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const container = target.closest('.mainBanner__container') as HTMLElement;
    const banner = container.firstElementChild as HTMLElement;
    banner.classList.add('background-blur');
  };
  return btnTabDetails;
};
