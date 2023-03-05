import { createButton } from 'src/components/ui/Button/Button';
import { PATH_NAMES } from 'src/const/path-names';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';

export const renderHeroSectionNewUser = (): HTMLElement => {
  const container = createElem('div', 'subs-hero__contents-container');
  container.classList.add('main_banner');

  const h1: HTMLElement = createElem('h1', 'subs-hero__title');
  h1.innerHTML = 'Фильмы и сериалы по подписке';
  const subTitle: HTMLElement = createElem('h2', 'subs-hero__sub-title');
  subTitle.innerHTML =
    'Тысячи фильмов и сериалов по цене одного на целый месяц: мировые блокбастеры, культовые сериалы, анимация от Disney';

  const subsBtn: HTMLElement = createButton(
    'Оформить подписку',
    () => {
      route(PATH_NAMES.register);
    },
    'subs-hero__btn'
  );

  container.append(h1, subTitle, subsBtn);

  return container;
};
