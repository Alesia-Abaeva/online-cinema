import { createElem } from 'src/utils/create-element';

export const renderPlayFilm = (id: number | string, poster: string) => {
  const container = createElem('div', 'films-container');
  container.innerHTML = `<iframe src="https://29.annacdn.cc/mtgPAT9r1Xi6?kp_id=${id}&poster=${poster}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;

  // <div data-kinopoisk="[ТУТ ID КИНОПОИСКА]" id="kinobd"></div>
  // <script src="https://kinobd.ru/js/player_.js"></script>

  return container;
};
