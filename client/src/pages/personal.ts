import { getPersonalData } from 'src/api/back/folders';
import { renderLoader } from 'src/components/Loader/Loader';
import { renderPersonal } from 'src/components/PersonalPage/PersonalPage';

import { renderApp } from '../components/App/App';

export const personal = async (): Promise<void> => {
  renderApp(() => renderLoader());

  const data = await getPersonalData();
  let folders: ResponseFolder[] | undefined;
  let userFolders: ResponseUserFolder[] | undefined;

  if (data) {
    folders = data.foldersData;
    userFolders = data.userFoldersData;
  }
  renderApp(() => renderPersonal(folders, userFolders));
};
