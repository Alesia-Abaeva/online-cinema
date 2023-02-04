import { createElem } from 'src/utils/create-element';
import styles from './PersonSidebar.module.scss';

export const renderPersonSidebar = (): HTMLElement => {
  const profileSideBar: HTMLElement = createElem('div', styles['profile-sidebar__cnt']);
  //   const userAvatarCnt: HTMLElement = createElem('div', styles['profile-sidebar__user-avatar']); // будет еще ФИО
  //   const imgInputCnt: HTMLElement = createElem('div', styles['user-avatar__input']); // контейнер для инпута и для лого

  return profileSideBar;
};
