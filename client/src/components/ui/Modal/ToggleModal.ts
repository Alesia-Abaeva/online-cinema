import { toggleScroll } from 'src/components/ui/Modal/no-scroll-on';

export const toggleModal = (hostEl: HTMLElement, overlay: HTMLElement): void => {
  toggleScroll();
  if (overlay) overlay.classList.toggle('hidden_overlay');
  if (hostEl) hostEl.classList.toggle('active');
};
