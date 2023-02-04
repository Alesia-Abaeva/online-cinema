import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './Avatar.module.scss';

export const renderAvatar = (): HTMLElement => {
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  const avatarCircle: HTMLElement = createElem('div', 'avatar__circle');
  const avatarImg: HTMLElement = createElem('div', styles['avatar__profile']);

  //   avatarImg.style.backgroundImage = `url(${avatarUrl})`;
  //   TODO: загрузка изображений!

  avatarCircle.append(avatarImg);
  avatarWrap.append(avatarCircle);

  store.subscribe(() => {
    const userState = store.getState().auth.user;
    userState.data?.avatarUrl && (avatarImg.style.backgroundImage = userState.data?.avatarUrl);
  });
  return avatarWrap;
};
