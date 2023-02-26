import { createElem } from 'src/utils/create-element';

export const renderPlayFilm = (id: number | string) => {
  const container = createElem('div', 'films-container');
  container.innerHTML = `<iframe src="https://v1677342597.bazon.site/kp/${id}?trans=1,2,3,4,5,6" frameborder="0" scrolling="no" allowfullscreen="" referrerpolicy="origin"  width="100%" height="100%"></iframe>`;

  return container;
};
