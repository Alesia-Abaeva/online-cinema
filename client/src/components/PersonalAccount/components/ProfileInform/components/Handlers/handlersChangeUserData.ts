import {
  createUserFolder,
  deleteUserFolder,
  updateFoldersData,
  updateUserFolder,
  updateUserFolderName,
} from 'src/api/back/folders';
import { deleteUser, updateUser, updateUserTariff } from 'src/api/back/auth';
import { LOCAL_STORAGE_KEYS } from 'src/const/local-storage';
import { PATH_NAMES } from 'src/const/path-names';
import { appDispatch } from 'src/logic/redux';
import { setLogoutState, setUserInfo, setViewType } from 'src/logic/redux/actions';
import { route } from 'src/router/route';
import { ViewType } from 'src/const/main-page-data';

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
    // const updateRes = await updateFoldersData(body);
    console.log(data);
    appDispatch(setUserInfo({ data }));
    // appDispatch(setUserInfo({ data: updateRes.data }));
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
    appDispatch(setLogoutState());
    appDispatch(setUserInfo({ data: null }));
    appDispatch(setViewType(ViewType.GUEST));
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    route(PATH_NAMES.main);
  } catch (err) {
    console.warn(err);
  }
};
