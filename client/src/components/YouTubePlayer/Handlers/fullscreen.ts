import { fromFullscreenModeIcon } from 'src/const/icons/player-icons';

export const fullscreenPlayer = () => {
  const wrapper = document.querySelector('.youtube-player') as HTMLIFrameElement;
  const iframe = document.getElementById('trailer-btn-video') as HTMLIFrameElement;
  const fullscreenBtn = document.getElementById('controls-fullscreen-mode') as HTMLElement;

  fullscreenBtn.classList.remove('controls__fullscreen');
  fullscreenBtn.classList.add('controls__modalscreen');
  fullscreenBtn.innerHTML = fromFullscreenModeIcon;

  iframe.classList.add('video-fullscreen');
  wrapper.requestFullscreen();
};
