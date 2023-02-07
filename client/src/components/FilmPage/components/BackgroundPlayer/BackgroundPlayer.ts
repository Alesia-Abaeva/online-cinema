import { renderYouTubePlayer } from 'src/components/YouTubePlayer/YouTubePlayer';
import { showCover } from '../../Handlers/showCover';

export const renderBackgroundPlayer = (
  filmData: ResponseMovie,
  backdrop: HTMLElement,
  mainContent: HTMLElement
): void => {
  const { videos } = filmData;
  if (videos) {
    const trailer = videos.trailers;
    if (trailer && trailer.length !== 0) {
      renderYouTubePlayer(
        'video-player',
        `${trailer[0].url}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1`,
        10,
        11,
        showCover(filmData, backdrop, mainContent),
        showCover(filmData, backdrop, mainContent)
      );
    } else {
      showCover(filmData, backdrop, mainContent)();
    }
  } else {
    showCover(filmData, backdrop, mainContent)();
  }
};
