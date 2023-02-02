import { createElem } from '../../../../utils/create-element';
import styles from './HeroSection.module.scss';

export const renderHeroSection = (): HTMLElement => {
  const heroSection: HTMLElement = createElem('section', styles['subs-hero']);

  // TODO: Поменять текст на наш
  const h1: HTMLElement = createElem('h1', 'subs-hero__title');
  h1.innerHTML = 'Фильмы и сериалы по подписке';
  const subTitle: HTMLElement = createElem('h2', 'subs-hero__subTitle');
  subTitle.innerHTML = 'Отменяйте в любой момент, напишем за 3 дня до первого списания';

  // TODO: Заменить кнопку на компонент кнопки
  const subsBtn: HTMLElement = createElem('button', 'subs-hero__btn');
  subsBtn.textContent = 'Оформить подписку';

  heroSection.append(h1, subTitle, subsBtn);

  return heroSection;
};
