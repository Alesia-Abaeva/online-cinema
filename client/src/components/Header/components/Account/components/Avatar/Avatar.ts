import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './Avatar.module.scss';

export const renderAvatar = (): HTMLElement => {
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  const avatarCircle: HTMLElement = createElem('div', 'avatar__circle');
  const avatar: HTMLElement = createElem('div', styles['avatar__profile']);

  avatarCircle.append(avatar);
  avatarWrap.append(avatarCircle);

  store.subscribe(() => {
    const userState = store.getState().auth.user;
    userState.data?.avatarUrl &&
      (avatar.style.backgroundImage = `url(http://localhost:3000${userState.data?.avatarUrl})`);
  });
  return avatarWrap;
};

export const renderChildeAvatar = (text: string): HTMLElement => {
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  avatarWrap.classList.add('childe-avatar__wrapper');
  const avatar: HTMLElement = createElem('div', styles['avatar__profile']);
  avatar.classList.add('childe-avatar');
  const name = createElem('span', 'avatar__name');
  name.innerHTML = text;

  avatarWrap.append(avatar, name);
  store.subscribe(() => {
    // TODO: подписка на контроль
  });
  return avatarWrap;
};
