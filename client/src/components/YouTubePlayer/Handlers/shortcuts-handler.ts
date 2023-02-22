import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';
import { fullscreenPlayer } from './fullscreen';
import { modalPlayer } from './modalscreen';
import { mutePlayer } from './mute';
import { pausePlayer } from './pause';
import { playPlayer } from './play';
import { unmutePlayer } from './unmute';
import { updateProgressBar } from './update-progressbar';
import { updateTimerDisplay } from './update-timestamp';

export const playerShortcutsHandler = async (event: KeyboardEvent, player: TypeYouTubePlayer) => {
  if (event.key.toLowerCase() === 'k') {
    const isPlaying = document.querySelector('.youtube-player__main-play-icon') as HTMLElement;
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
  if (event.key.toLowerCase() === 'm') {
    const isVolume = document.getElementById('controls-volume-mute') as HTMLElement;
    if (isVolume && isVolume.classList.contains('controls__volume')) {
      mutePlayer(player);
    } else {
      unmutePlayer(player);
    }
  }
  if (event.key.toLowerCase() === 'f') {
    const fullscreenBtn = document.getElementById('controls-fullscreen-mode') as HTMLElement;
    if (fullscreenBtn && fullscreenBtn.classList.contains('controls__fullscreen')) {
      fullscreenPlayer();
    } else {
      modalPlayer();
    }
  }
};
