import { volumeIcon } from 'src/const/icons/player-icons';
import { createElem } from 'src/utils/create-element';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';
import { prevVolumeValue } from '../YouTubePlayer';

export const unmutePlayer = (player: TypeYouTubePlayer) => {
  const volumeBtn = document.getElementById('controls-volume-mute') as HTMLElement;
  const progressbarAudio = document.getElementById('volume-progressbar') as HTMLInputElement;

  volumeBtn.classList.remove('controls__mute');
  volumeBtn.classList.add('controls__volume');
  volumeBtn.innerHTML = volumeIcon;
  const tooltip: HTMLElement = createElem('span', 'tooltiptext');
  tooltip.innerHTML = 'Mute (m)';
  volumeBtn.append(tooltip);

  const value = prevVolumeValue.volume;
  progressbarAudio.value = value.toString();
  progressbarAudio.style.background = `linear-gradient(to right, #4776e6 0%, #8e54e9 ${
    value - 25
  }%, #4776e6 ${value}%, hsla(0, 0%, 100%, 0.3) ${value}%, hsla(0, 0%, 100%, 0.3) 100%)`;
  player.unMute();
};
