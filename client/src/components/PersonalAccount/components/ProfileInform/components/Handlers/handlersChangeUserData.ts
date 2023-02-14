import { deleteUser, updateUser, updateUserParentsCntr, updateUserPass, updateUserTariff } from 'src/api/back/auth';
import {
  createUserFolder,
  deleteUserFolder,
  updateFoldersData,
  updateUserFolder,
  updateUserFolderName,
} from 'src/api/back/folders';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { PATH_NAMES } from 'src/const/path-names';
import { appDispatch } from 'src/logic/redux';
import { setPasswordError, setUserInfo } from 'src/logic/redux/actions';
import { route } from 'src/router/route';

export const handleChangeUserData = async (body: AuthGetPersonToken) => {
  try {
    const newBody = Object.fromEntries(Object.entries(body).filter((el) => el[1] !== ''));
    // удаляем пустые строчки
    const { data } = await updateUser(newBody);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleChangeUserPassword = async (body: AuthGetPersonToken, array: HTMLInputElement[]) => {
  try {
    await updateUserPass(body);
    appDispatch(setPasswordError(null));

    const success = document.querySelector('.change_password') as HTMLElement;
    success.innerHTML = 'Данные успешно обновлены ＼(￣▽￣)／';
    success.classList.add('active-pass-modal');
    array.forEach((input) => {
      /* eslint-disable */
      input.value = '';
    });

    setTimeout(() => {
      success.innerHTML = '';
      success.classList.remove('active-pass-modal');
    }, 2000);

    // показываем модалку
  } catch (err) {
    console.warn(err);
    appDispatch(setPasswordError(err as ErrorMessage));
  }
};

export const handleChangeParentControl = async (body: AuthGetPersonToken) => {
  try {
    const { data } = await updateUserParentsCntr(body);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleChangeTariff = async (body: AuthGetPersonToken) => {
  try {
    const { data } = await updateUserTariff(body);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleUpdateFolders = async (body: FolderData) => {
  try {
    const { data } = await updateFoldersData(body);
    appDispatch(setUserInfo({ data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleUpdateUserFolders = async (body: UserFolderData) => {
  try {
    const updateRes = await updateUserFolder(body);
    appDispatch(setUserInfo({ data: updateRes.data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleCreateUserFolder = async (body: UserFolderData) => {
  try {
    const updateRes = await createUserFolder(body);
    appDispatch(setUserInfo({ data: updateRes.data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleDeleteUserFolder = async (body: UserFolderData) => {
  try {
    const updateRes = await deleteUserFolder(body);
    appDispatch(setUserInfo({ data: updateRes.data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleUpdateUserFolderName = async (body: UserFolderData) => {
  try {
    const updateRes = await updateUserFolderName(body);
    appDispatch(setUserInfo({ data: updateRes.data }));
  } catch (err) {
    console.warn(err);
  }
};

export const handleDelete = async () => {
  try {
    await deleteUser();
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    route(PATH_NAMES.main);
  } catch (err) {
    console.warn(err);
  }
};
