import { renderOverlay } from 'src/components/Overlay/Overlay';
import { handleUpdateFolders } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { createButton } from 'src/components/ui/Button/Button';
import { addFilmModal } from 'src/components/ui/ModalFilm/Handlers/show-hide-modal';
import { renderCustomYouTubePlayer } from 'src/components/YouTubePlayer/Trailer-YouTubePlayer';
import { renderYouTubePlayer } from 'src/components/YouTubePlayer/YouTubePlayer';
import { bookmarkIcon, threeDotsIcon, watchFilmIcon } from 'src/const/icons/icons';
import { PATH_NAMES } from 'src/const/path-names';
import { store } from 'src/logic/redux';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import { renderButtonDropdown } from '../ButtonDropdown/ButtonDropdown';
import { closeDropdown } from '../ButtonDropdown/Handlers/close-dropdown';
import { renderErrorMes } from '../Modal/components/ModalError/ModalError';
import { renderModal } from '../Modal/Modal';
import { toggleModal } from '../Modal/ToggleModal';
import styles from './buttons.module.scss';

const watchFilmContent = `${watchFilmIcon}Смотреть фильм`;

export const createBtnWatch = (filmId: number, filmImg: string) => {
  const btnWatch = createButton(watchFilmContent) as HTMLButtonElement;
  btnWatch.classList.add(`${styles.actionBtn__film}`, `${styles.actionBtn}`);

  btnWatch.onclick = () => {
    const { data } = store.getState().user.personal;
    if (data) {
      if (data.tariff === 'premium') {
        addFilmModal(filmId, filmImg);
        handleUpdateFolders({ folderName: 'watchedRecently', id: filmId });
      } else {
        route(PATH_NAMES.userSubscribe);
      }
    } else {
      route(PATH_NAMES.register);
    }
  };

  return btnWatch;
};

export const createBtnTrailer = (film: ResponseMovie) => {
  const btnTrailer = createButton('Трейлер', undefined, `${styles.actionBtn}`) as HTMLButtonElement;

  btnTrailer.onclick = (): void => {
    const main = document.querySelector('.main') as HTMLElement;
    if (main) {
      const { videos } = film;
      if (videos) {
        let customPlayer: HTMLElement;
        let modalType: string | undefined;
        const trailer = videos.trailers;
        if (trailer && trailer.length !== 0) {
          customPlayer = renderCustomYouTubePlayer();
          modalType = 'modal_dark';
          setTimeout(() => {
            renderYouTubePlayer(
              'trailer-btn-video',
              `${trailer[0].url}?&controls=0&showinfo=0&version=3`,
              undefined,
              undefined,
              0,
              () => console.log('the end'),
              () => console.log('not working')
            );
          }, 0);
        } else {
          customPlayer = renderErrorMes('К сожалению мы не нашли данный трейлер (μ_μ)');
        }
        const { modalFragment, modal, overlay } = renderModal(customPlayer, modalType);
        main.append(modalFragment);
        setTimeout(() => toggleModal(modal, overlay), 0);
      }
    }
  };
  btnTrailer.classList.add(`${styles.actionBtn__trailer}`);
  return btnTrailer;
};

export const createBtnBookmark = () => {
  const btnBookmark = createButton(bookmarkIcon) as HTMLButtonElement;
  btnBookmark.classList.add(`${styles.actionBtn__round}`, `${styles.actionBtn}`);

  btnBookmark.onclick = () =>
    store.getState().user.personal.data
      ? console.log('Здесь будет логика добавления в избранное')
      : route(PATH_NAMES.register);

  return btnBookmark;
};

export const createBtnInterest = (filmId: number) => {
  const btnWrapper: HTMLElement = createElem('div', 'action-btn-wrapper');
  const btnInterest = createButton(threeDotsIcon, undefined, `${styles.actionBtn}`) as HTMLButtonElement;

  // не рисуем кнопку дропдаун, если пользователь не авторизован
  !store.getState().user.personal.data && (btnWrapper.style.display = 'none');

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
  const btnTabAboutFilm = createButton('О фильме', undefined, `${styles.tabBtn}`) as HTMLButtonElement;
  btnTabAboutFilm.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const container = target.closest('.mainBanner__container') as HTMLElement;
    const banner = container.firstElementChild as HTMLElement;
    banner.classList.remove('background-blur');
  };
  return btnTabAboutFilm;
};

export const createBtnTabDetails = () => {
  const btnTabDetails = createButton('Детали', undefined, `${styles.tabBtn}`) as HTMLButtonElement;
  btnTabDetails.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    const container = target.closest('.mainBanner__container') as HTMLElement;
    const banner = container.firstElementChild as HTMLElement;
    banner.classList.add('background-blur');
  };
  return btnTabDetails;
};
