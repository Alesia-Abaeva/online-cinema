import { volumeIconMute } from 'src/const/icons/player-icons';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const mutePlayer = (player: TypeYouTubePlayer) => {
  const volumeBtn = document.getElementById('controls-volume-mute') as HTMLElement;
  const progressbarAudio = document.getElementById('volume-progressbar') as HTMLInputElement;

  volumeBtn.classList.remove('controls__volume');
  volumeBtn.classList.add('controls__mute');
  volumeBtn.innerHTML = volumeIconMute;
  progressbarAudio.value = '0';
  progressbarAudio.style.background = `hsla(0, 0%, 100%, 0.3)`;
  player.mute();
};
