import { uploadHandler } from 'src/api/back/auth';
import { renderAvatar } from 'src/components/Header/components/Account/components/Avatar/Avatar';
import { createInputElement } from 'src/components/ui/Input/Input';
import { fotoIcon } from 'src/const/icons/icons';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './PersonSidebar.module.scss';

export const handleChangeFile = async (e: Event) => {
  try {
    const target = e.target as HTMLInputElement;
    const filesList = target.files as FileList;
    const file = filesList[0];

    const formData = new FormData();
    formData.append('image', file);

    console.log('formData', formData);
    const { data } = await uploadHandler(formData);
    console.log(data);
  } catch (err) {
    // console.warn(err);
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
  // контейнер для инпута и для лого // контейнер для инпута и для лого
  // контейнер для инпута и для лого

  store.subscribe(() => {
    const userState = store.getState().auth.user;
    userState.data?.avatarUrl && (avatar.style.backgroundImage = userState.data?.avatarUrl);
  });

  userAvatarCnt.append(imgInputCnt);
  profileSideBar.append(userAvatarCnt);
  return profileSideBar;
};
