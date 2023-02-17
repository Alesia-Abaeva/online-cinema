import YouTubePlayer from 'youtube-player';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const renderYouTubePlayer = (
  name: string,
  url: string,
  startSeconds: number | undefined,
  endSeconds: number | undefined,
  autoPlay: 1 | 0,
  onEnd?: <T>(...args: T[]) => void,
  onError?: <T>(...args: T[]) => void
): void => {
  const player = YouTubePlayer(name, {
    playerVars: {
      controls: 0,
      autoplay: autoPlay,
    },
  });

  if (startSeconds && endSeconds) {
    player.loadVideoByUrl({
      mediaContentUrl: url,
      startSeconds,
      endSeconds,
    });
  } else {
    player.cueVideoByUrl({
      mediaContentUrl: url,
    });
  }

  player.on('ready', (e: CustomEvent) => {
    const iframe = document.getElementById(name) as HTMLIFrameElement;
    iframe.style.display = 'block';
    const playerEl = e.target as unknown as TypeYouTubePlayer;
    if (autoPlay === 1) {
      playerEl.mute();
      console.log('play');
      playerEl.playVideo();
    } else {
      const mainPlayBtn = document.getElementById('main-play-btn') as HTMLElement;
      mainPlayBtn.onclick = (event: Event) => {
        mainPlayBtn.classList.add('hidden');
        playerEl.playVideo();
        event.stopPropagation();
      };

      const video = document.querySelector('.youtube-player') as HTMLElement;
      video.onclick = (event: Event) => {
        console.log(event.target);
        mainPlayBtn.classList.remove('hidden');
        playerEl.pauseVideo();
      };
    }
  });

  // If there is a problem playing the video
  let counter = 0;
  player.on('error', (err) => {
    console.log(err);
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
