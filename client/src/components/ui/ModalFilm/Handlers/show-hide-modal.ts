import { renderPlayFilm } from './films-iframe';

export const addFilmModal = (id: number | string) => {
  const container = document.querySelector('.mоdal-films_body') as HTMLElement;
  const overlay = document.getElementById('modal-films') as HTMLElement;
  const modalWindow = document.querySelector('.mоdal-films_window') as HTMLElement;

  if (container && overlay && modalWindow) {
    // рендерим iframe на открытие модального окна
    container.append(renderPlayFilm(id));

    overlay.classList.add('open-modal_films');
    overlay.classList.remove('close-modal_films');
    modalWindow.classList.add('open-modal_films');
    modalWindow.classList.remove('close-modal_films');

    const bodyElem: HTMLElement = document.body;
    setTimeout(() => bodyElem.classList.add('active-modal_films'), 600);
  }
};

export const removeFilmModal = (container: HTMLElement, overlay: HTMLElement, modalWindow: HTMLElement) => {
  modalWindow.classList.add('close-modal_films');
  modalWindow.classList.remove('open-modal_films');

  overlay.classList.add('close-modal_films');
  overlay.classList.remove('open-modal_films');

  const bodyElem: HTMLElement = document.body;
  bodyElem.classList.remove('active-modal_films');

  /* eslint-disable */
  container.innerHTML = '';
};
