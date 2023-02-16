import { renderAvatar } from 'src/components/Header/components/Account/components/Avatar/Avatar';
import { createInputElement } from 'src/components/ui/Input/Input';
import { fotoIcon } from 'src/const/icons/icons';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { handleChangeFile } from '../../PersonSidebar';
import styles from './UserAvatarData.module.scss';

export const renderUserAvatarBlock = (): HTMLElement => {
  const userAvatarCnt: HTMLElement = createElem('div', styles['profile-sidebar__user-avatar']);

  const userCnt: HTMLElement = createElem('div', 'profile-sidebar__user-data'); // будет еще ФИО
  const userName: HTMLElement = createElem('span', 'profile-sidebar__user-name');
  const userEmail: HTMLElement = createElem('span', 'profile-sidebar__user-email');
  // userEmail.innerHTML = store.getState().user.personal.data?.email as string;

  // input
  const imgInputCnt: HTMLElement = createElem('div', 'user-avatar__ctn'); // контейнер для инпута и для лого
  const avatar: HTMLElement = renderAvatar();

  const svgCnt: HTMLElement = createElem('div', 'user-avatar__svg-cnt');
  svgCnt.innerHTML = fotoIcon;

  const input = createInputElement({ type: 'file', name: 'photo', style: 'user-avatar__input' });
  input.setAttribute('accept', '.jpg, .jpeg, .png');
  input.setAttribute('hidden', 'true');

  svgCnt.append(input);

  svgCnt.onclick = () => input.click();
  input.onchange = handleChangeFile;

  imgInputCnt.append(avatar, svgCnt);

  store.subscribe(() => {
    const userState = store.getState().user.personal;

    // userState.data?.avatarUrl && (avatar.style.backgroundImage = userState.data?.avatarUrl);
    // userEmail.innerHTML = store.getState().user.personal.data?.email as string;

    if (userState.data?.email) {
      // userName.innerHTML = userState.data?.name as string;
      userEmail.innerHTML = userState.data?.email as string;
    }

    if (userState.data?.name) {
      userName.innerHTML = userState.data?.name as string;
    }
  });

  userCnt.append(userName, userEmail);
  userAvatarCnt.append(imgInputCnt, userCnt);

  return userAvatarCnt;
};
