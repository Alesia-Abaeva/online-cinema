import { store } from 'src/logic/redux';
import { createElem } from '../../../../utils/create-element';
import { renderHeroSectionAuthUser } from './AuthUser/HeroSecAuthUser';
import { renderHeroSectionNewUser } from './ForNewUsers/HeroSecNewUsers';
import styles from './HeroSection.module.scss';

export const renderHeroSection = (): HTMLElement => {
  const heroSection: HTMLElement = createElem('section', styles['subs-hero']);

  heroSection.append(store.getState().uiConfig.isAuth ? renderHeroSectionAuthUser() : renderHeroSectionNewUser());

  store.subscribe(() => {
    const { isAuth } = store.getState().uiConfig;
    heroSection.innerHTML = '';
    heroSection.append(isAuth ? renderHeroSectionAuthUser() : renderHeroSectionNewUser());
  });

  return heroSection;
};
