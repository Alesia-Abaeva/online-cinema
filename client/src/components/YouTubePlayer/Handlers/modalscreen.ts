import { toFullscreenModeIcon } from 'src/const/icons/player-icons';
import { createElem } from 'src/utils/create-element';

export const modalPlayer = () => {
  const iframe = document.getElementById('trailer-btn-video') as HTMLIFrameElement;
  iframe.classList.remove('video-fullscreen');

  const fullscreenBtn = document.getElementById('controls-fullscreen-mode') as HTMLElement;

  fullscreenBtn.classList.remove('controls__modalscreen');
  fullscreenBtn.classList.add('controls__fullscreen');
  fullscreenBtn.innerHTML = toFullscreenModeIcon;
  const tooltip: HTMLElement = createElem('span', 'tooltiptext');
  tooltip.innerHTML = 'Exit fullscreen (f)';
  fullscreenBtn.append(tooltip);

  if (document.fullscreen) {
    document.exitFullscreen();
  }
};
