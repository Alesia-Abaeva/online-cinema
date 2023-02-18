import { toFullscreenModeIcon } from 'src/const/icons/player-icons';

export const modalPlayer = () => {
  const iframe = document.getElementById('trailer-btn-video') as HTMLIFrameElement;
  iframe.classList.remove('video-fullscreen');

  const fullscreenBtn = document.getElementById('controls-fullscreen-mode') as HTMLElement;

  fullscreenBtn.classList.remove('controls__modalscreen');
  fullscreenBtn.classList.add('controls__fullscreen');
  fullscreenBtn.innerHTML = toFullscreenModeIcon;
  if (document.fullscreen) {
    document.exitFullscreen();
  }
};
