import {
  CREATE_USER_FOLDER,
  DELETE_USER_FOLDER,
  UPDATE_FOLDER,
  UPDATE_USER_FOLDER,
  UPDATE_USER_FOLDER_NAME,
} from 'src/const/api/url';
import { backCall } from '../api';

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
