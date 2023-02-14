import { store } from 'src/logic/redux';
import { CHILD } from 'src/logic/redux/types-redux';
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

    if (userState.data?.parentControls === CHILD) {
      // avatar.classList.remove('child-avatar');
      avatarWrap.style.display = 'none';
    } else {
      avatarWrap.style.display = 'flex';
    }
  });
  return avatarWrap;
};

export const renderChildAvatar = (text: string): HTMLElement => {
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  avatarWrap.classList.add('child-avatar__wrapper');
  const avatar: HTMLElement = createElem('div', styles['avatar__profile']);
  avatar.classList.add('child-avatar');
  const name = createElem('span', 'avatar__name');
  name.innerHTML = text;

  avatarWrap.append(avatar, name);
  store.subscribe(() => {
    const userState = store.getState().auth.user;

    if (userState.data?.parentControls === CHILD) {
      // TODO: добавить стиль для увеличения аватара
      name.innerHTML = '';
    } else {
      name.innerHTML = text;
    }
  });
  return avatarWrap;
};
