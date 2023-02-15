import { getPersonalData } from 'src/api/back/folders';
import { renderPersonal } from 'src/components/PersonalPage/PersonalPage';
import { renderApp } from '../components/App/App';

export const personal = async (): Promise<void> => {
  const data = await getPersonalData();
  let folders: ResponseFolder[] | undefined;
  let userFolders: ResponseUserFolder[] | undefined;

  if (data) {
    folders = data.foldersData;
    userFolders = data.userFoldersData;
  }
  renderApp(() => renderPersonal(folders, userFolders));
};
