import { renderPlayFilm } from './films-iframe';

export const addFilmModal = (
  container: HTMLElement,
  overlay: HTMLElement,
  modalWindow: HTMLElement,
  id: number | string,
  poster: string
) => {
  // рендерим iframe на открытие модального окна
  container.append(renderPlayFilm(id, poster));

  overlay.classList.add('open-modal_films');
  overlay.classList.remove('close-modal_films');
  modalWindow.classList.add('open-modal_films');
  modalWindow.classList.remove('close-modal_films');

  const bodyElem: HTMLElement = document.body;
  setTimeout(() => bodyElem.classList.add('active-modal_films'), 600);
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
