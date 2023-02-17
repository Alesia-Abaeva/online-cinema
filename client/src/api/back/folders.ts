/* eslint-disable no-underscore-dangle */
import {
  CREATE_USER_FOLDER,
  DELETE_USER_FOLDER,
  UPDATE_FOLDER,
  UPDATE_USER_FOLDER,
  UPDATE_USER_FOLDER_NAME,
} from 'src/const/api/url';
import { loadState } from 'src/logic/local-storage/local-storage';
import { backCall } from '../api';
import { getMovie } from '../films';

export const updateFoldersData = async (body: FolderData) =>
  backCall.put<FolderData, AuthGetPersonToken>(UPDATE_FOLDER, body);

export const createUserFolder = async (body: UserFolderData) =>
  backCall.put<UserFolderData, AuthGetPersonToken>(CREATE_USER_FOLDER, body);

export const updateUserFolder = async (body: UserFolderData) =>
  backCall.put<UserFolderData, AuthGetPersonToken>(UPDATE_USER_FOLDER, body);

export const deleteUserFolder = async (body: UserFolderData) =>
  backCall.put<UserFolderData, AuthGetPersonToken>(DELETE_USER_FOLDER, body);

export const updateUserFolderName = async (body: UserFolderData) =>
  backCall.put<UserFolderData, AuthGetPersonToken>(UPDATE_USER_FOLDER_NAME, body);

export const getPersonalData = async (): Promise<
  | {
      foldersData: ResponseFolder[];
      userFoldersData: ResponseUserFolder[];
    }
  | undefined
> => {
  const peristedState = loadState();
  let folders: FoldersType | undefined;
  let userFolders: UserFolder[] | undefined;
  if (peristedState) {
    const { data } = peristedState.auth.user;
    folders = data?.folders;
    userFolders = data?.userFolders;
  }
  if (folders && userFolders) {
    const allFolders = Array.from(Object.entries(folders));
    const foldersData = await Promise.all(
      allFolders.map(async (el) => {
        return {
          folderName: el[0],
          data: await Promise.all(el[1].map(async (item) => await getMovie({ id: item.toString() }))),
        };
      })
    );
    const userFoldersData = await Promise.all(
      userFolders.map(async (el) => {
        return {
          displayedName: el.displayedName,
          films: await Promise.all(el.films.map(async (item) => await getMovie({ id: item.toString() }))),
          _id: el._id,
        };
      })
    );
    return { foldersData, userFoldersData };
  }
  return undefined;
};
