import { UPDATE_FOLDER } from 'src/const/api/url';
import { backCall } from '../api';

export const updateFoldersData = async (body: FolderData) =>
  backCall.put<FolderData, AuthGetPersonToken>(UPDATE_FOLDER, body);
