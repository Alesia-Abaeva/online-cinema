import { createElem } from 'src/utils/create-element';

export const renderHeroSectionAuthUser = (): HTMLElement => {
  const container = createElem('div', 'subs-hero__contents-container');

  // TODO: Поменять текст на наш
  const h1: HTMLElement = createElem('h1', 'subs-hero__title');
  h1.innerHTML = 'Здесь будет блок с рандомным фильмом';

  container.append(h1);

  return container;
};
