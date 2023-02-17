import { store } from 'src/logic/redux';
import { renderFolder } from '../Folder/Folder';

export const renderFolders = (foldersCont: HTMLElement, filmId: number | undefined): void => {
  const userDataStore = store.getState().user.personal.data;
  const userFolders = userDataStore ? userDataStore.userFolders : '';
  if (userFolders) {
    userFolders.forEach((fold) => {
      const folder = renderFolder(fold, filmId);
      foldersCont.append(folder);
    });
  }
};
