/* eslint-disable consistent-return */
import { createButton } from 'src/components/ui/Button/Button';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './AddToFolderModal.module.scss';
import { renderFolder } from './components/Folder/Folder';
import { renderFolderActions } from './components/FolderActions/FolderActions';
import { onClickFolder } from './Handlers/onClickFolder';

export const renderAddToFolderModalContent = (filmId: number): HTMLElement => {
  const modalAddToFolder: HTMLElement = createElem('div', 'add-to-folder-modal');

  const title: HTMLElement = createElem('h2', styles['add-to-folder-modal__title']);
  title.innerHTML = 'Выберите папку или создайте новую';

  const modalContent: HTMLElement = createElem('div', 'add-to-folder-modal__content');

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

  const saveFoldersBntCtn: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSaveData: HTMLElement = createButton('сохранить');

  saveFoldersBntCtn.onclick = () => {
    const modal = document.querySelector('.modal') as HTMLElement;
    const overlay = document.querySelector('.modal__overlay') as HTMLElement;
    const modalCont = document.querySelector('.main__modal-container') as HTMLElement;
    toggleModal(modal, overlay);
    setTimeout(() => modalCont.remove(), 300);
  };

  saveFoldersBntCtn.append(bntSaveData);

  allFoldersCont.onclick = (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('all-folders__folder')) onClickFolder(target, filmId);
  };

  allFolders.append(allFoldersTitle, allFoldersCont, saveFoldersBntCtn);

  // right side - inputs to create folder or update
  const foldersActions: HTMLElement = renderFolderActions();

  modalContent.append(allFolders, foldersActions);
  modalAddToFolder.append(title, modalContent);
  return modalAddToFolder;
};
