import { volumeIconMute } from 'src/const/icons/player-icons';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const mutePlayer = (player: TypeYouTubePlayer) => {
  const volumeBtn = document.getElementById('controls-volume-mute') as HTMLElement;
  volumeBtn.classList.remove('controls__volume');
  volumeBtn.classList.add('controls__mute');
  volumeBtn.innerHTML = volumeIconMute;
  player.mute();
};
