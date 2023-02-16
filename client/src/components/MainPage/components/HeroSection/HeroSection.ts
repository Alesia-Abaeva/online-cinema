import { store } from 'src/logic/redux';
import { createElem } from '../../../../utils/create-element';
import { renderHeroSectionAuthUser } from './AuthUser/HeroSecAuthUser';
import { renderHeroSectionNewUser } from './ForNewUsers/HeroSecNewUsers';
import styles from './HeroSection.module.scss';

export const renderHeroSection = (): HTMLElement => {
  const heroSection: HTMLElement = createElem('section', styles['subs-hero']);

  const forNewUsers: HTMLElement = renderHeroSectionNewUser();

  // TODO: изменить эту функцию, чтобы рендерлся блок с видео
  const authUser: HTMLElement = renderHeroSectionAuthUser();
  heroSection.append(store.getState().uiConfig.isAuth ? authUser : forNewUsers);

  store.subscribe(() => {
    const { isAuth } = store.getState().uiConfig;

    if (!isAuth) {
      return heroSection.contains(authUser) ? heroSection.removeChild(authUser) : heroSection.append(forNewUsers);
    }

    return heroSection.contains(forNewUsers) ? heroSection.removeChild(forNewUsers) : heroSection.append(authUser);
  });

  return heroSection;
};
