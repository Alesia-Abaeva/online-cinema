import { toggleScroll } from 'src/components/ui/Modal/no-scroll-on';
import { intervalState } from 'src/components/YouTubePlayer/YouTubePlayer';

export const toggleModal = (hostEl: HTMLElement, overlay: HTMLElement): void => {
  toggleScroll();
  if (overlay) overlay.classList.toggle('hidden_overlay');
  if (hostEl) hostEl.classList.toggle('active');
  if (intervalState.timer) clearInterval(intervalState.timer);
};
