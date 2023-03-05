import { renderErrorMes } from 'src/components/ui/Modal/components/ModalError/ModalError';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';
import { intervalState } from '../YouTubePlayer';

export const destroyPlayer = (player: TypeYouTubePlayer) => {
  const youtubeControls = document.querySelector('.youtube-player') as HTMLElement;
  if (youtubeControls) {
    youtubeControls.remove();
    if (intervalState.timer) {
      clearInterval(intervalState.timer);
    }

    player.destroy();

    const modal = document.querySelector('.modal') as HTMLElement;
    const messageEl: HTMLElement = renderErrorMes('Что то пошло не так, возможно этого трейлера нету (×﹏×)');
    modal.append(messageEl);

    modal.classList.remove('modal_dark');
  }
};
