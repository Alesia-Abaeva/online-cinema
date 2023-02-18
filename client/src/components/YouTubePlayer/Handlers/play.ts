import { pauseIconSm } from 'src/const/icons/player-icons';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const playPlayer = (player: TypeYouTubePlayer) => {
  const playBtn = document.getElementById('controls-play-pause') as HTMLElement;
  const mainPlayBtn = document.getElementById('main-play-btn') as HTMLElement;

  mainPlayBtn.classList.add('hidden');
  playBtn.classList.remove('controls__play');
  playBtn.classList.add('controls__pause');
  playBtn.innerHTML = pauseIconSm;
  player.playVideo();
};
