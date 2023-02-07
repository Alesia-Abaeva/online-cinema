import { uploadHandler } from 'src/api/back/auth';
import { SIDEBAR_BTNS } from 'src/const/nav-bar-btns';
import { appDispatch } from 'src/logic/redux';
import { setUserInfo } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
import { createLink } from 'src/utils/create-link-element';
import { renderUserAvatarBlock } from './components/UserAvatarData/UserAvatarData';
import styles from './PersonSidebar.module.scss';

export const handleChangeFile = async (e: Event) => {
  try {
    const target = e.target as HTMLInputElement;
    const filesList = target.files as FileList;
    const file = filesList[0];

    const formData = new FormData();
    formData.append('image', file);

    // загрузжаем файл - получаем ответ с обновленными данными о юзере
    const { data } = await uploadHandler(formData);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};

export const renderPersonSidebar = (): HTMLElement => {
  const profileSideBar: HTMLElement = createElem('div', styles['profile-sidebar__cnt']);

  const userAvatarCnt: HTMLElement = renderUserAvatarBlock();

  const menuCtn: HTMLElement = createElem('div', 'profile-sidebar__menu');

  SIDEBAR_BTNS.forEach((element) => {
    const item: HTMLElement = createElem('div', 'profile-sidebar__item');
    const link: HTMLElement = createLink(element.link, 'nav__list-link', false, element.text);
    if (window.location.pathname === element.link) {
      link.classList.add('active-block');
    }
    item.append(link);
    menuCtn.append(item);
  });

  // Тариф
  const tariff = createElem('div', 'profile-sidebar__tariff');
  const tariffIconCnt = createElem('div', 'tariff_icon');
  const tariffName = createElem('div', 'tariff_name');
  tariffName.innerHTML = 'Для всех';
  tariff.append(tariffIconCnt, tariffName);

  profileSideBar.append(userAvatarCnt, tariff, menuCtn);
  return profileSideBar;
};
