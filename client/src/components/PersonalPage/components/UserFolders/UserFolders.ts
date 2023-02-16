import { getPersonalData } from 'src/api/back/folders';
import { renderAddToFolderModalContent } from 'src/components/ui/ButtonDropdown/components/AddToFolderModal/AddToFolderModal';
import { renderModal } from 'src/components/ui/Modal/Modal';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { editIcon } from 'src/const/icons/icons';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { renderUserFolder } from '../UserFolder/UserFolder';
import styles from './UserFolders.module.scss';

export const renderUserFolders = (userFoldersData: ResponseUserFolder[] | undefined): HTMLElement => {
  const folders: HTMLElement = createElem('div', 'personal__folders');
  const foldersHeader: HTMLElement = createElem('div', 'personal__folders-header');

  const foldersTitle: HTMLElement = createElem('h2', 'personal__folders-title');
  foldersTitle.innerHTML = 'Пользовательские папки';

  const foldersAction: HTMLElement = createElem('div', 'personal__folders-actions');
  foldersAction.innerHTML = `${editIcon} Реадктировать`;

  foldersAction.onclick = () => {
    const main = document.querySelector('.main') as HTMLElement;
    if (main) {
      const { modalFragment, modal, overlay } = renderModal(renderAddToFolderModalContent(undefined), 'modal_folders');
      main.append(modalFragment);
      setTimeout(() => toggleModal(modal, overlay), 0);
    }
  };

  foldersHeader.append(foldersTitle, foldersAction);
  const foldersCont: HTMLElement = createElem('div', styles['personal__folders-cont']);

  if (userFoldersData) {
    userFoldersData.forEach((el) => {
      const folder: HTMLElement = renderUserFolder(el);
      foldersCont.append(folder);
    });
  }

  store.subscribe(async () => {
    const res = await getPersonalData();
    if (res) {
      const newFolderData = res.userFoldersData;
      foldersCont.innerHTML = '';
      newFolderData.forEach((el) => {
        const folder: HTMLElement = renderUserFolder(el);
        foldersCont.append(folder);
      });
    }
  });

  folders.append(foldersHeader, foldersCont);

  return folders;
};
