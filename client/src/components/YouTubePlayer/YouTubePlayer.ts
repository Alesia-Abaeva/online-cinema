import YouTubePlayer from 'youtube-player';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const renderYouTubePlayer = (
  name: string,
  url: string,
  startSeconds: number,
  endSeconds: number,
  onEnd?: <T>(...args: T[]) => void,
  onError?: <T>(...args: T[]) => void
): void => {
  const player = YouTubePlayer(name, {
    playerVars: {
      controls: 0,
      autoplay: 1,
    },
  });

  player.loadVideoByUrl({
    mediaContentUrl: url,
    startSeconds,
    endSeconds,
  });

  player.on('ready', (e: CustomEvent) => {
    const iframe = document.getElementById(name) as HTMLIFrameElement;
    iframe.style.display = 'block';
    const playerEl = e.target as unknown as TypeYouTubePlayer;
    playerEl.mute();
    playerEl.playVideo();
  });

  // If there is a problem playing the video
  let counter = 0;
  player.on('error', () => {
    counter++;
    if (counter > 2) {
      player.destroy();
      if (onError) onError();
    }
  });

  // On video end delete
  player.on('stateChange', (e: CustomEvent & { data: number }) => {
    if (e.data === 0) {
      player.destroy();
      if (onEnd) onEnd();
    }
  });
};
