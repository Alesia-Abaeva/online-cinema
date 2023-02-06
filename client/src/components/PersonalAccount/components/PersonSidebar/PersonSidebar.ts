import { uploadHandler } from 'src/api/back/auth';
import { appDispatch } from 'src/logic/redux';
import { setUserInfo } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
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

  // Аватар имя и почта
  const userAvatarCnt: HTMLElement = renderUserAvatarBlock();

  // TODO: Рендерить через цикл, после того как определмся, что здесь остается
  const menuCtn: HTMLElement = createElem('div', 'profile-sidebar__menu');
  const item1: HTMLElement = createElem('div', 'profile-sidebar__item');
  item1.innerHTML = 'Учетная запись';

  const item2: HTMLElement = createElem('div', 'profile-sidebar__item');
  item2.innerHTML = 'Учетная запись';

  const item3: HTMLElement = createElem('div', 'profile-sidebar__item');
  item3.innerHTML = 'Буду смотреть';

  const item4: HTMLElement = createElem('div', 'profile-sidebar__item');
  item4.innerHTML = 'Подписки';

  const item5: HTMLElement = createElem('div', 'profile-sidebar__item');
  item5.innerHTML = 'Промокод';

  const item6: HTMLElement = createElem('div', 'profile-sidebar__item');
  item6.innerHTML = 'Настройки';

  const item7: HTMLElement = createElem('div', 'profile-sidebar__item');
  item7.innerHTML = 'Справка';

  menuCtn.append(item1, item2, item3, item4, item5, item6, item7);

  // Тариф

  const tariff = createElem('div', 'profile-sidebar__tariff');
  tariff.innerHTML = 'Для всех';

  profileSideBar.append(userAvatarCnt, tariff, menuCtn);
  return profileSideBar;
};
