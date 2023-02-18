import YouTubePlayer from 'youtube-player';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';
import { fullscreenPlayer } from './Handlers/fullscreen';
import { handelProgressbar } from './Handlers/handle-progressbar';
import { modalPlayer } from './Handlers/modalscreen';
import { mutePlayer } from './Handlers/mute';
import { pausePlayer } from './Handlers/pause';
import { playPlayer } from './Handlers/play';
import { unmutePlayer } from './Handlers/unmute';
import { updateProgressBar } from './Handlers/update-progressbar';
import { updateTimerDisplay } from './Handlers/update-timestamp';

export const intervalState: {
  timer: NodeJS.Timer | null;
} = {
  timer: null,
};

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
    // Settings as a background player
    player.loadVideoByUrl({
      mediaContentUrl: url,
      startSeconds,
      endSeconds,
    });
  } else {
    // Custom player settings
    player.cueVideoByUrl({
      mediaContentUrl: url,
    });
  }

  player.on('ready', async (e: CustomEvent) => {
    const iframe = document.getElementById(name) as HTMLIFrameElement;
    iframe.style.display = 'block';
    const playerEl = e.target as unknown as TypeYouTubePlayer;
    if (autoPlay === 1) {
      // Settings as a background player
      playerEl.mute();
      console.log('play');
      playerEl.playVideo();
    } else {
      updateTimerDisplay(playerEl);
      updateProgressBar(playerEl);
      if (intervalState.timer) {
        clearInterval(intervalState.timer);
      }

      const updateInterval = setInterval(() => {
        updateTimerDisplay(playerEl);
        updateProgressBar(playerEl);
      }, 1000);

      intervalState.timer = updateInterval;

      document.onfullscreenchange = () => {
        if (!document.fullscreen) {
          modalPlayer();
        }
      };

      // Custom player settings
      // Central play btn
      const mainPlayBtn = document.getElementById('main-play-btn') as HTMLElement;
      mainPlayBtn.onclick = (event: Event) => {
        event.stopPropagation();
        playPlayer(playerEl);
      };

      // Bottom controls play/pause btn
      const playBtn = document.getElementById('controls-play-pause') as HTMLElement;

      playBtn.onclick = (event: Event) => {
        event.stopPropagation();
        const target = event.target as HTMLElement;
        if (target.classList.contains('controls__play')) {
          playPlayer(playerEl);
        } else if (target.classList.contains('controls__pause')) {
          pausePlayer(playerEl);
        }
      };

      // Bottom controls volume btn on/off
      const volumeBtn = document.getElementById('controls-volume-mute') as HTMLElement;

      volumeBtn.onclick = (event: Event) => {
        event.stopPropagation();
        const target = event.target as HTMLElement;
        if (target.classList.contains('controls__volume')) {
          mutePlayer(playerEl);
        } else if (target.classList.contains('controls__mute')) {
          unmutePlayer(playerEl);
        }
      };

      const fullscreenBtn = document.getElementById('controls-fullscreen-mode') as HTMLElement;

      fullscreenBtn.onclick = (event: Event) => {
        event.stopPropagation();
        const target = event.target as HTMLElement;
        if (target.classList.contains('controls__fullscreen')) {
          fullscreenPlayer();
        } else if (target.classList.contains('controls__modalscreen')) {
          modalPlayer();
        }
      };
      const progressbar = document.getElementById('video-progressbar') as HTMLInputElement;

      progressbar.onchange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        handelProgressbar(playerEl, input);
        setTimeout(() => {
          playPlayer(playerEl);
        }, 10);
      };

      // Pause on video click
      const video = document.querySelector('.youtube-player') as HTMLElement;
      video.onclick = (event: Event) => {
        event.stopPropagation();
        pausePlayer(playerEl);
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
  player.on('stateChange', async (e: CustomEvent & { data: number }) => {
    if (autoPlay !== 1) {
      console.log(e);
      // if (e.data === 5) {
      //   const time = await player.getDuration();
      //   const formatedTime = toSecondsAndMinutes(time);
      //   const timeEl = document.querySelector('.controls__timestamp') as HTMLElement;
      //   timeEl.innerHTML = formatedTime;
      // }
      // if (e.data === 1) {
      //   const formatedTime = toSecondsAndMinutes(time);
      //   const timeEl = document.querySelector('.controls__timestamp') as HTMLElement;
      //   timeEl.innerHTML = formatedTime;
      // }
    }
    if (e.data === 0) {
      player.destroy();
      if (onEnd) onEnd();
    }
  });
};
