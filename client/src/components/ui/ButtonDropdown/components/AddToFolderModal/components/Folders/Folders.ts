import { store } from 'src/logic/redux';
import { renderFolder } from '../Folder/Folder';

export const renderFolders = (foldersCont: HTMLElement, filmId: number): void => {
  const { data } = store.getState().auth.user;
  const userFolders = data ? data.userFolders : '';
  if (userFolders) {
    userFolders.forEach((el) => {
      const folder = renderFolder(el, filmId);
      foldersCont.append(folder);
    });
  }
};
