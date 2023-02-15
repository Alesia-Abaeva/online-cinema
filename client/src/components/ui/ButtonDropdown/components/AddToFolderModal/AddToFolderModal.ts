import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './AddToFolderModal.module.scss';
import { renderFolder } from './components/Folder/Folder';
import { renderFolderActions } from './components/FolderActions/FolderActions';
import { onClickFolder } from './Handlers/onClickFolder';

export const renderAddToFolderModalContent = (filmId: number): HTMLElement => {
  const modal: HTMLElement = createElem('div', 'add-to-folder-modal');

  const title: HTMLElement = createElem('h2', styles['add-to-folder-modal__title']);
  title.innerHTML = 'Выберите папку или создайте новую';

  const modalConetent: HTMLElement = createElem('div', 'add-to-folder-modal__content');

  // left side - all folders
  const allFolders: HTMLElement = createElem('div', 'all-folders');
  const allFoldersTitle: HTMLElement = createElem('p', 'all-folders__title');
  allFoldersTitle.innerHTML = 'Ваши папки';

  const allFoldersCont: HTMLElement = createElem('div', 'all-folders__cont');

  const { data } = store.getState().auth.user;
  const userFolders = data ? data.userFolders : '';
  if (userFolders) {
    userFolders.forEach((el) => {
      const folder = renderFolder(el, filmId);
      allFoldersCont.append(folder);
    });
  }

  allFoldersCont.onclick = onClickFolder;

  allFolders.append(allFoldersTitle, allFoldersCont);

  // right side - inputs to create folder or update
  const foldersActions: HTMLElement = renderFolderActions();

  modalConetent.append(allFolders, foldersActions);
  modal.append(title, modalConetent);
  return modal;
};
