import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const handelVideoProgressbar = async (player: TypeYouTubePlayer, input: HTMLInputElement) => {
  const time = await player.getDuration();
  const newTime = time * (+input.value / 100);
  player.seekTo(newTime, true);
};
