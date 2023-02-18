import { volumeIcon } from 'src/const/icons/player-icons';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const unmutePlayer = (player: TypeYouTubePlayer) => {
  const volumeBtn = document.getElementById('controls-volume-mute') as HTMLElement;
  volumeBtn.classList.remove('controls__mute');
  volumeBtn.classList.add('controls__volume');
  volumeBtn.innerHTML = volumeIcon;
  player.unMute();
};
