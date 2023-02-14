import { handleChangeParentControl } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { PATH_NAMES } from 'src/const/path-names';
import { store } from 'src/logic/redux';
import { CHILD, PARENT } from 'src/logic/redux/types-redux';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import styles from './Avatar.module.scss';

export const renderAvatar = (): HTMLElement => {
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  const avatarCircle: HTMLElement = createElem('div', 'avatar__circle');
  const avatar: HTMLElement = createElem('div', styles['avatar__profile']);

  avatarCircle.append(avatar);
  avatarWrap.append(avatarCircle);

  store.subscribe(() => {
    const userState = store.getState().user.personal;
    userState.data?.avatarUrl &&
      (avatar.style.backgroundImage = `url(http://localhost:3000${userState.data?.avatarUrl})`);

    if (userState.data?.parentControls === CHILD) {
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

  const ageCnt = createElem('div', 'childe-age__cnt');
  const age = createElem('span', 'childe-age');
  age.innerHTML = '12+';
  ageCnt.append(age);

  avatarWrap.onclick = () => {
    handleChangeParentControl({
      parentControls: store.getState().user.personal.data?.parentControls === CHILD ? PARENT : CHILD,
    });
    route(PATH_NAMES.main);
  }; // обновили стейт

  avatarWrap.append(avatar, name);

  store.subscribe(() => {
    const userState = store.getState().user.personal;

    if (userState.data?.parentControls === CHILD) {
      avatar.classList.add('child-avatar-avtive');
      // ageCnt.style.visibility = 'visible';
      avatarWrap.append(ageCnt);
      name.innerHTML = '';
    } else {
      name.innerHTML = text;
      avatar.classList.remove('child-avatar-avtive');
      // ageCnt.style.visibility = 'hidden';
      ageCnt.innerHTML = '';
    }
  });
  return avatarWrap;
};
