import { ViewType } from 'src/const/main-page-data';
import { PATH_NAMES } from 'src/const/path-names';
import { appDispatch, store } from 'src/logic/redux';
import { changeParentControl } from 'src/logic/redux/actions';
import { CHILD, PARENT } from 'src/logic/redux/types-redux';
import { route } from 'src/router/route';
import { createElem } from 'src/utils/create-element';
import user from 'assets/img/user.svg';
import styles from './Avatar.module.scss';

export const renderAvatar = (): HTMLElement => {
  const userStateOnLoad = store.getState().user.personal.data;
  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  const avatarCircle: HTMLElement = createElem('div', 'avatar__circle');
  const avatar: HTMLElement = createElem('div', styles['avatar__profile']);

  avatar.style.backgroundImage = userStateOnLoad?.avatarUrl
    ? `url(http://localhost:3000${userStateOnLoad.avatarUrl})`
    : `url(${user})`;

  avatarWrap.style.display = userStateOnLoad?.parentControls === PARENT ? `flex` : `none`;

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
  const { viewType } = store.getState().uiConfig;

  const avatarWrap: HTMLElement = createElem('div', 'avatar__wrapper');
  avatarWrap.classList.add('child-avatar__wrapper');
  const avatar: HTMLElement = createElem('div', styles['avatar__profile']);
  avatar.classList.add('child-avatar');
  const name = createElem('span', 'avatar__name');

  const ageCnt = createElem('div', 'childe-age__cnt');
  const age = createElem('span', 'childe-age');
  age.innerHTML = '12+';

  avatarWrap.append(avatar, name);

  if (viewType === ViewType.USER) {
    name.innerHTML = text;
    avatar.classList.remove('child-avatar-avtive');
    ageCnt.innerHTML = '';
  } else {
    avatar.classList.add('child-avatar-avtive');
    ageCnt.append(age);
    name.innerHTML = '';

    avatarWrap.append(ageCnt);
  }

  avatarWrap.onclick = async () => {
    await appDispatch(changeParentControl());
    route(PATH_NAMES.main);
  }; // обновили стейт

  store.subscribe(() => {
    const { viewType: currentViewType } = store.getState().uiConfig;

    if (currentViewType === ViewType.CHILD) {
      avatar.classList.add('child-avatar-avtive');
      ageCnt.append(age);
      avatarWrap.append(ageCnt);
      name.innerHTML = '';

      return null;
    }

    name.innerHTML = text;
    avatar.classList.remove('child-avatar-avtive');
    ageCnt.innerHTML = '';

    return null;
  });
  return avatarWrap;
};
