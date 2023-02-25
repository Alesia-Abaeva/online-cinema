import { createElem } from 'src/utils/create-element';

export const renderPlayFilm = (id: number | string) => {
  const container = createElem('div', 'films-container');
  // container.innerHTML = `<iframe src="https://29.annacdn.cc/mtgPAT9r1Xi6?kp_id=${id}&poster=${poster}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;

  container.innerHTML = `<iframe src="https://v1677342597.bazon.site/kp/${id}" frameborder="0" scrolling="no" allowfullscreen="" referrerpolicy="origin"  width="100%" height="100%"></iframe>`;
  // `<iframe id="iframe_view" frameborder="0" scrolling="no" allowfullscreen="" referrerpolicy="origin" style="width:100%;height:431px;" src="https://v1677342418.bazon.site/kp/462353"></iframe>`;

  // container.innerHTML = `
  // <div data-kinopoisk="${id}" id="kinobd"></div>`;
  // // <div data-kinopoisk="[ТУТ ID КИНОПОИСКА]" id="kinobd"></div>
  // // <script src="https://kinobd.ru/js/player_.js"></script>

  return container;
};
