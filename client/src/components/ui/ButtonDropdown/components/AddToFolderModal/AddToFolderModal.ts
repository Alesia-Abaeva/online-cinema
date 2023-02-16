/* eslint-disable consistent-return */
import { handleUpdateUserFolders } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { createButton } from 'src/components/ui/Button/Button';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import styles from './AddToFolderModal.module.scss';
import { renderFolderActions } from './components/FolderActions/FolderActions';
import { renderFolders } from './components/Folders/Folders';

export const renderAddToFolderModalContent = (filmId: number | undefined): HTMLElement => {
  const modalAddToFolder: HTMLElement = createElem('div', 'add-to-folder-modal');

  const title: HTMLElement = createElem('h2', styles['add-to-folder-modal__title']);
  title.innerHTML = 'Выберите папку или создайте новую';

  const modalContent: HTMLElement = createElem('div', 'add-to-folder-modal__content');

  // left side - all folders
  const allFolders: HTMLElement = createElem('div', 'all-folders');
  const allFoldersTitle: HTMLElement = createElem('p', 'all-folders__title');
  allFoldersTitle.innerHTML = 'Ваши папки';

  const allFoldersCont: HTMLElement = createElem('div', 'all-folders__cont');

  renderFolders(allFoldersCont, filmId);

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
    if (filmId) {
      const target = e.target as HTMLElement;
      if (target.classList.contains('all-folders__folder') && target.dataset.id) {
        handleUpdateUserFolders({ id: +target.dataset.id, filmId });
      }
    }
  };

  allFolders.append(allFoldersTitle, allFoldersCont, saveFoldersBntCtn);

  // right side - inputs to create folder or update
  const foldersActions: HTMLElement = renderFolderActions();

  modalContent.append(allFolders, foldersActions);
  modalAddToFolder.append(title, modalContent);

  store.subscribe(() => {
    allFoldersCont.innerHTML = '';
    renderFolders(allFoldersCont, filmId);
  });

  return modalAddToFolder;
};
