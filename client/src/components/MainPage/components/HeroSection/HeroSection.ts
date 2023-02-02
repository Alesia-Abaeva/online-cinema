import { createButton } from 'src/components/ui/Button/Button';
import { route } from 'src/router/route';
import { createElem } from '../../../../utils/create-element';
import styles from './HeroSection.module.scss';

export const renderHeroSection = (): HTMLElement => {
  const heroSection: HTMLElement = createElem('section', styles['subs-hero']);

  // TODO: Поменять текст на наш
  const h1: HTMLElement = createElem('h1', 'subs-hero__title');
  h1.innerHTML = 'Фильмы и сериалы по подписке';
  const subTitle: HTMLElement = createElem('h2', 'subs-hero__sub-title');
  subTitle.innerHTML =
    'Тысячи фильмов и сериалов по цене одного на целый месяц: мировые блокбастеры, культовые сериалы, анимация от Disney';

  // TODO: Если авторизован, ссылка на страницу выбора подписки, если нет, ссылка на логин
  const subsBtn: HTMLElement = createButton(
    'Оформить подписку',
    () => {
      route('/subscriptions');
    },
    'subs-hero__btn'
  );
  subsBtn.textContent = 'Оформить подписку';

  heroSection.append(h1, subTitle, subsBtn);

  return heroSection;
};
