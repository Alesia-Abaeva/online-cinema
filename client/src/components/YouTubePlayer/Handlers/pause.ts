import { playIconSm } from 'src/const/icons/player-icons';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const pausePlayer = (player: TypeYouTubePlayer) => {
  const playBtn = document.getElementById('controls-play-pause') as HTMLElement;
  const mainPlayBtn = document.getElementById('main-play-btn') as HTMLElement;

  mainPlayBtn.classList.remove('hidden');
  playBtn.classList.remove('controls__pause');
  playBtn.classList.add('controls__play');
  playBtn.innerHTML = playIconSm;
  player.pauseVideo();
};
