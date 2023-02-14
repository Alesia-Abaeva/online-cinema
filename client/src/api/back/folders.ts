import { CREATE_USER_FOLDER, UPDATE_FOLDER } from 'src/const/api/url';
import { backCall } from '../api';

export const updateFoldersData = async (body: FolderData) =>
  backCall.put<FolderData, AuthGetPersonToken>(UPDATE_FOLDER, body);

export const createUserFolder = async (body: UserFolderData) =>
  backCall.put<UserFolderData, AuthGetPersonToken>(CREATE_USER_FOLDER, body);
