import { renderOverlay } from 'src/components/Overlay/Overlay';
import { createButton } from 'src/components/ui/Button/Button';
import { addFilmModal } from 'src/components/ui/ModalFilm/Handlers/show-hide-modal';
import { renderCustomYouTubePlayer } from 'src/components/YouTubePlayer/Trailer-YouTubePlayer';
import { renderYouTubePlayer } from 'src/components/YouTubePlayer/YouTubePlayer';
import { bookmarkIcon, threeDotsIcon, watchFilmIcon } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import { renderButtonDropdown } from '../ButtonDropdown/ButtonDropdown';
import { closeDropdown } from '../ButtonDropdown/Handlers/close-dropdown';
import { renderModal } from '../Modal/Modal';
import { toggleModal } from '../Modal/ToggleModal';
import styles from './buttons.module.scss';

const watchFilmContent = `${watchFilmIcon}Смотреть фильм`;

export const createBtnWatch = (filmId: number, filmImg: string) => {
  const btnWatch = createButton(watchFilmContent) as HTMLButtonElement;
  btnWatch.classList.add(`${styles.actionBtn__film}`, `${styles.actionBtn}`);
  btnWatch.onclick = () => addFilmModal(filmId, filmImg);
  return btnWatch;
};

export const createBtnTrailer = (film: ResponseMovie) => {
  const btnTrailer = createButton('Трейлер', undefined, `${styles.actionBtn}`) as HTMLButtonElement;

  btnTrailer.onclick = (): void => {
    const main = document.querySelector('.main') as HTMLElement;
    if (main) {
      const customPlayer: HTMLElement = renderCustomYouTubePlayer();

      setTimeout(() => {
        const { videos } = film;
        if (videos) {
          const trailer = videos.trailers;
          if (trailer && trailer.length !== 0) {
            renderYouTubePlayer(
              'trailer-btn-video',
              `${trailer[0].url}?&controls=0&showinfo=1&autohide=1&version=3`,
              undefined,
              undefined,
              0,
              () => console.log('the end'),
              () => console.log('not working')
            );
          }
        }
      }, 0);
      const { modalFragment, modal, overlay } = renderModal(customPlayer, 'modal_dark');
      main.append(modalFragment);
      setTimeout(() => toggleModal(modal, overlay), 0);
    }
  };
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

export const createBtnInterest = (filmId: number) => {
  const btnWrapper: HTMLElement = createElem('div', 'action-btn-wrapper');
  const btnInterest = createButton(threeDotsIcon, undefined, `${styles.actionBtn}`) as HTMLButtonElement;

  btnInterest.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const wrapper = target.parentElement as HTMLElement;
    const dropDown: HTMLElement = renderButtonDropdown(filmId);
    wrapper.append(dropDown);
    const overlay = renderOverlay(() => {
      closeDropdown();
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
