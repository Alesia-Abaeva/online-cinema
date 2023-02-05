import { uploadHandler } from 'src/api/back/auth';
import { renderAvatar } from 'src/components/Header/components/Account/components/Avatar/Avatar';
import { createInputElement } from 'src/components/ui/Input/Input';
import { fotoIcon } from 'src/const/icons/icons';
import { appDispatch, store } from 'src/logic/redux';
import { setUserInfo } from 'src/logic/redux/actions';
import { createElem } from 'src/utils/create-element';
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
    console.log(data);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
    alert('Ошибка при загрузке изображения');
  }
};

export const renderPersonSidebar = (): HTMLElement => {
  const profileSideBar: HTMLElement = createElem('div', styles['profile-sidebar__cnt']);
  const userAvatarCnt: HTMLElement = createElem('div', 'profile-sidebar__user-avatar'); // будет еще ФИО
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
    console.log('d');
    const userState = store.getState().auth.user;
    console.log(userState.data?.avatarUrl);
    userState.data?.avatarUrl && (avatar.style.backgroundImage = userState.data?.avatarUrl);
  });

  userAvatarCnt.append(imgInputCnt);
  profileSideBar.append(userAvatarCnt);
  return profileSideBar;
};
