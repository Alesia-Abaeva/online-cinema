import { playIcon, playIconSm, toFullscreenModeIcon, volumeIcon } from 'src/const/icons/player-icons';
import { createElem } from 'src/utils/create-element';
import { createPlayerBtn } from './components/PlayerBtn/PlayerBtn';
import styles from './Trailer-YouTubePlayer.module.scss';

export const renderCustomYouTubePlayer = (): HTMLElement => {
  const customPlayer: HTMLElement = createElem('div', styles['youtube-player']);

  const trailerDiv: HTMLElement = document.createElement('div');
  trailerDiv.id = 'trailer-btn-video';

  customPlayer.append(trailerDiv);

  const playBtn: HTMLElement = createElem('div', 'youtube-player__main-play');
  const playIconEl: HTMLElement = createElem('div', 'youtube-player__main-play-icon');
  playIconEl.id = 'main-play-btn';
  playIconEl.innerHTML = playIcon;
  playBtn.append(playIconEl);

  const bottomControls: HTMLElement = createElem('div', 'youtube-player__controls');
  bottomControls.classList.add('controls');

  const controlsPlayPause: HTMLElement = createPlayerBtn(
    'controls__play',
    'controls-play-pause',
    playIconSm,
    'Play (k)'
  );

  const controlsProgressBar = createElem('input', 'controls__progressbar') as HTMLInputElement;
  controlsProgressBar.setAttribute('type', 'range');
  controlsProgressBar.setAttribute('value', '0');
  controlsProgressBar.id = 'video-progressbar';

  controlsProgressBar.oninput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const { value } = input;
    input.style.background = `linear-gradient(to right, #4776e6 0%, #8e54e9 ${
      +value - 25
    }%, #4776e6 ${value}%, hsla(0, 0%, 100%, 0.3) ${value}%, hsla(0, 0%, 100%, 0.3) 100%)`;
  };

  const controlsTimestamp = createElem('span', 'controls__timestamp');
  controlsTimestamp.innerHTML = '00:00';

  const volumeIconEl: HTMLElement = createPlayerBtn('controls__volume', 'controls-volume-mute', volumeIcon, 'Mute (m)');

  const volumeControl = createElem('input', 'controls__volume-control') as HTMLInputElement;
  volumeControl.setAttribute('type', 'range');
  volumeControl.setAttribute('min', '0');
  volumeControl.setAttribute('max', '100');
  volumeControl.setAttribute('step', '0.1');
  volumeControl.value = '50';
  volumeControl.id = 'volume-progressbar';
  volumeControl.style.background = `linear-gradient(to right, #4776e6 0%, #8e54e9 ${
    +50 - 25
  }%, #4776e6 ${50}%, hsla(0, 0%, 100%, 0.3) ${50}%, hsla(0, 0%, 100%, 0.3) 100%)`;

  volumeControl.oninput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const { value } = input;
    input.style.background = `linear-gradient(to right, #4776e6 0%, #8e54e9 ${
      +value - 25
    }%, #4776e6 ${value}%, hsla(0, 0%, 100%, 0.3) ${value}%, hsla(0, 0%, 100%, 0.3) 100%)`;
  };

  const fullscreenMode: HTMLElement = createPlayerBtn(
    'controls__fullscreen',
    'controls-fullscreen-mode',
    toFullscreenModeIcon,
    'Fullscreen (f)'
  );

  bottomControls.append(
    controlsPlayPause,
    controlsProgressBar,
    controlsTimestamp,
    volumeIconEl,
    volumeControl,
    fullscreenMode
  );

  customPlayer.append(playBtn, bottomControls);

  return customPlayer;
};
