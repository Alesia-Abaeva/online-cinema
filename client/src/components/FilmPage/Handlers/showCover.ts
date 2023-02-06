/* eslint-disable no-param-reassign */
export const showCover = (filmData: ResponseMovie, backdrop: HTMLElement) => {
  return () => {
    if (filmData.backdrop) {
      backdrop.classList.add('film-page__backdrop_img');
      // linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      backdrop.style.background = `50% 25% / cover no-repeat url(${filmData.backdrop.url})`;
    }
  };
};
