import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const updateProgressBar = async (player: TypeYouTubePlayer) => {
  const progressbar = document.getElementById('video-progressbar') as HTMLInputElement;
  const curTime = await player.getCurrentTime();
  const time = await player.getDuration();
  const timeValue = (curTime / time) * 100;
  progressbar.value = timeValue.toString();
  progressbar.style.background = `linear-gradient(to right, #4776e6 0%, #8e54e9 ${
    timeValue - 25
  }%, #4776e6 ${timeValue}%, hsla(0, 0%, 100%, 0.3) ${timeValue}%, hsla(0, 0%, 100%, 0.3) 100%)`;
};
