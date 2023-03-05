/* eslint-disable no-param-reassign */
export const showCover = (filmData: ResponseMovie, backdrop: HTMLElement, filmPage?: HTMLElement) => {
  return () => {
    if (filmData.backdrop && filmData.backdrop.url) {
      backdrop.classList.add('id-page__backdrop_img');
      backdrop.style.background = `50% 25% / cover no-repeat url(${filmData.backdrop.url})`;
    } else if (filmPage) filmPage.style.marginTop = '100px';
  };
};
