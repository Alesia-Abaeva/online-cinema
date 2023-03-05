import { renderYouTubePlayer } from 'src/components/YouTubePlayer/YouTubePlayer';

export const renderBackgroundPlayer = (filmData: ResponseMovie, playerId: string, showBackground: () => void): void => {
  const { videos } = filmData;
  if (videos) {
    const trailer = videos.trailers;
    if (trailer && trailer.length !== 0) {
      renderYouTubePlayer(
        playerId,
        `${trailer[0].url}?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1`,
        10,
        25,
        1,
        showBackground,
        showBackground
      );
    } else {
      showBackground();
    }
  } else {
    showBackground();
  }
};
