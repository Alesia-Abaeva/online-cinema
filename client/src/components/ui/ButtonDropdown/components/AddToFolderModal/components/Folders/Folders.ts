import { renderUserWatchEmpty } from 'src/components/PersonalAccount/components/ProfileInform/components/UserWatch/UserWatch';
import { store } from 'src/logic/redux';
import { renderFolder } from '../Folder/Folder';

export const renderFolders = (foldersCont: HTMLElement, filmId: number | undefined): void => {
  const userDataStore = store.getState().user.personal.data;
  const userFolders = userDataStore ? userDataStore.userFolders : '';
  if (userFolders && userFolders.length > 0) {
    userFolders.forEach((fold) => {
      const folder = renderFolder(fold, filmId);
      foldersCont.append(folder);
    });
  } else {
    const sliderEmpty = renderUserWatchEmpty('Создайте новую папку и сможете собирать свои коллекции фильмов');
    foldersCont.append(sliderEmpty);
  }
};
