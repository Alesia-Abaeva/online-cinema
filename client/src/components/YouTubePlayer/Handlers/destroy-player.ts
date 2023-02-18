import { renderErrorMes } from 'src/components/ui/Modal/components/ModalError/ModalError';
import { YouTubePlayer as TypeYouTubePlayer } from 'youtube-player/dist/types';

export const destroyPlayer = (player: TypeYouTubePlayer) => {
  const youtubeControls = document.querySelector('.youtube-player') as HTMLElement;
  youtubeControls.remove();
  player.destroy();

  const modal = document.querySelector('.modal') as HTMLElement;
  const messageEl: HTMLElement = renderErrorMes('Что то пошло не так, возможно этого трейлера нету (×﹏×)');
  modal.append(messageEl);

  modal.classList.remove('modal_dark');
};
