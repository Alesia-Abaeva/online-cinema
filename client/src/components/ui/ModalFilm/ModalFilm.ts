import { renderLoaderDots } from 'src/components/Loader/Loader';
import { renderOverlay } from 'src/components/Overlay/Overlay';
import { createElem } from 'src/utils/create-element';
import { removeFilmModal } from './Handlers/show-hide-modal';
import styles from './ModalFilm.module.scss';

export const renderModal = (): CommonsHtml => {
  const container: HTMLElement = createElem('div', 'mоdal-films_container');
  const window: HTMLElement = createElem('div', styles['mоdal-films_window']);

  const dotsLoader = renderLoaderDots();
  window.append(dotsLoader);
  const body: HTMLElement = createElem('div', 'mоdal-films_body'); // контейнер для iframe
  const overlay: HTMLElement = renderOverlay(() => removeFilmModal(body, overlay, window), 'modal-films');
  const close: HTMLElement = createElem('div', 'mоdal-films_close');
  const closeIcon: HTMLElement = createElem('p', 'checkout-modal__close-icon');
  closeIcon.innerHTML = '╳';

  close.append(closeIcon);
  window.append(close, body);
  overlay.append(window);
  container.append(overlay);

  close.onclick = () => {
    removeFilmModal(body, overlay, window);
  };

  return { container, overlay, window, body };
};
