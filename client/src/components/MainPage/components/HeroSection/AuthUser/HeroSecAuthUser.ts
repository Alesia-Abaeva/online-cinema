import { randomMainFilms } from 'src/const/random-main-films';
import { createElem } from 'src/utils/create-element';
import { renderMainBanner } from '../../MainBanner/MainBanner';
import styles from './HeroSecAuthUser.module.scss';

export const renderHeroSectionAuthUser = (): HTMLElement => {
  const wrapper = createElem('div', styles['subs-hero__mainBanner']);

  setTimeout(async () => {
    const randomID = randomMainFilms[Math.floor(Math.random() * randomMainFilms.length)];
    const banner = await renderMainBanner(`${randomID}`, false, 'main-banner-video');
    wrapper.append(banner);
  }, 0);

  return wrapper;
};
