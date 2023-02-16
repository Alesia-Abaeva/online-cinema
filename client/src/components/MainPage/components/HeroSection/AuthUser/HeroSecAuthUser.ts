import { createElem } from 'src/utils/create-element';
import { renderMainBanner } from '../../MainBanner/MainBanner';
import styles from './HeroSecAuthUser.module.scss';

export const renderHeroSectionAuthUser = (): HTMLElement => {
  const wrapper = createElem('div', styles['subs-hero__mainBanner']);

  setTimeout(async () => {
    const banner = await renderMainBanner('820638', false);
    wrapper.append(banner);
  }, 0);

  return wrapper;
};
