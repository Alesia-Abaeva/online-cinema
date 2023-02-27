import { ViewType } from 'src/const/main-page-data';
import { MAIN_FILM_BANNER, MAIN_FILM_BANNER_CHILD } from 'src/const/random-main-films';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { renderMainBanner } from '../../MainBanner/MainBanner';
import styles from './HeroSecAuthUser.module.scss';

export const renderHeroSectionAuthUser = (): HTMLElement => {
  const view = store.getState().uiConfig.viewType;
  const wrapper = createElem('div', styles['subs-hero__mainBanner']);

  const setFilms = view === ViewType.CHILD ? MAIN_FILM_BANNER_CHILD : MAIN_FILM_BANNER;

  (() => {
    const randomID = setFilms[Math.floor(Math.random() * setFilms.length)];
    const banner = renderMainBanner(`${randomID}`, false);
    wrapper.append(banner);
  })();

  store.subscribe(() => {
    const isAuth = store.getState().uiConfig.viewType;

    if (isAuth === ViewType.CHILD) {
      (() => {
        const randomID = MAIN_FILM_BANNER_CHILD[Math.floor(Math.random() * MAIN_FILM_BANNER_CHILD.length)];
        const banner = renderMainBanner(`${randomID}`, false);
        wrapper.append(banner);
      })();
    }
  });

  return wrapper;
};
