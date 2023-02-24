import { fromFullscreenModeIcon } from 'src/const/icons/player-icons';
import { createElem } from 'src/utils/create-element';

export const fullscreenPlayer = () => {
  const wrapper = document.querySelector('.youtube-player') as HTMLIFrameElement;
  const iframe = document.getElementById('trailer-btn-video') as HTMLIFrameElement;
  const fullscreenBtn = document.getElementById('controls-fullscreen-mode') as HTMLElement;

  fullscreenBtn.classList.remove('controls__fullscreen');
  fullscreenBtn.classList.add('controls__modalscreen');
  fullscreenBtn.innerHTML = fromFullscreenModeIcon;
  const tooltip: HTMLElement = createElem('span', 'tooltiptext');
  tooltip.innerHTML = 'Exit fullscreen (f)';
  fullscreenBtn.append(tooltip);

  iframe.classList.add('video-fullscreen');
  wrapper.requestFullscreen();
};
