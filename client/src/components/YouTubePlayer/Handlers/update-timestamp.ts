import { toSecondsAndMinutes } from 'src/utils/to-seconds-and-minutes';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const updateTimerDisplay = async (player: TypeYouTubePlayer) => {
  const timeEl = document.querySelector('.controls__timestamp') as HTMLElement;

  const curTime = await player.getCurrentTime();
  const time = await player.getDuration();
  const timeLeft = time - curTime;

  timeEl.innerHTML = toSecondsAndMinutes(timeLeft);
};
