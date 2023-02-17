import { playIcon } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import styles from './Trailer-YouTubePlayer.module.scss';

export const renderCustomYouTubePlayer = (): HTMLElement => {
  const customPlayer: HTMLElement = createElem('div', styles['youtube-player']);

  const trailerDiv: HTMLElement = document.createElement('div');
  trailerDiv.id = 'trailer-btn-video';

  customPlayer.append(trailerDiv);

  const playBtn: HTMLElement = createElem('div', 'youtube-player__main-play');
  const playIconEl: HTMLElement = createElem('div', 'youtube-player__main-play-icon');
  playIconEl.id = 'main-play-btn';
  playIconEl.innerHTML = playIcon;
  playBtn.append(playIconEl);

  const bottomControls: HTMLElement = createElem('div', 'youtube-player__bottom');

  customPlayer.append(playBtn, bottomControls);
  return customPlayer;
};
