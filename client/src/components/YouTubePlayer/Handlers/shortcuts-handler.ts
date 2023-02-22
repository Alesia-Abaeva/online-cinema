import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';
import { pausePlayer } from './pause';
import { playPlayer } from './play';
import { updateProgressBar } from './update-progressbar';
import { updateTimerDisplay } from './update-timestamp';

export const playerShortcutsHandler = async (event: KeyboardEvent, player: TypeYouTubePlayer) => {
  const isPlaying = document.querySelector('.youtube-player__main-play-icon') as HTMLElement;

  if (event.key.toLowerCase() === 'k') {
    if (isPlaying && isPlaying.classList.contains('hidden')) {
      pausePlayer(player);
    } else {
      playPlayer(player);
    }
  }
  if (event.key.toLowerCase() === 'l') {
    const curTime = await player.getCurrentTime();
    player.seekTo(curTime + 10, true);
    updateTimerDisplay(player);
    updateProgressBar(player);
  }
  if (event.key.toLowerCase() === 'j') {
    const curTime = await player.getCurrentTime();
    player.seekTo(curTime - 10, true);
    updateTimerDisplay(player);
    updateProgressBar(player);
  }
};
