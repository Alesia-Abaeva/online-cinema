import { volumeIcon, volumeIconMute } from 'src/const/icons/player-icons';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';
import { prevVolumeValue } from '../YouTubePlayer';

export const handelAudioProgressbar = (player: TypeYouTubePlayer, input: HTMLInputElement) => {
  const { value } = input;
  const volumeBtn = document.getElementById('controls-volume-mute') as HTMLElement;

  volumeBtn.innerHTML = +value === 0 ? volumeIconMute : volumeIcon;
  prevVolumeValue.volume = +value;
  player.setVolume(+value);
};
