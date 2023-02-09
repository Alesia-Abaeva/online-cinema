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

  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data === null) {
      // если не авторизован
      heroSection.append(forNewUsers);
    } else {
      heroSection.append(authUser);
    }
  });

  return heroSection;
};
