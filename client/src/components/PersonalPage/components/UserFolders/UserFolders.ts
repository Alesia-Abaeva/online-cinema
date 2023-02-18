import { getPersonalData } from 'src/api/back/folders';
import { renderAddToFolderModalContent } from 'src/components/ui/ButtonDropdown/components/AddToFolderModal/AddToFolderModal';
import { renderModal } from 'src/components/ui/Modal/Modal';
import { toggleModal } from 'src/components/ui/Modal/ToggleModal';
import { renderPagination } from 'src/components/ui/Pagination/Pagination';
import { paginationState } from 'src/const/default-query-options';
import { editIcon } from 'src/const/icons/icons';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { paginate } from 'src/utils/paginate';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import { renderUserFolder } from '../UserFolder/UserFolder';
import { updateUserFoldersUI } from './updateUserFoldersUI';
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
    paginationState.limit = 8;
    const sliced = paginate(
      paginationState.page,
      paginationState.limit,
      userFoldersData
    ) as unknown as ResponseUserFolder[];
    paginationState.total = userFoldersData.length;
    sliced.forEach((el) => {
      const folder: HTMLElement = renderUserFolder(el);
      foldersCont.append(folder);
    });
  }

  const pagination = renderPagination(() => updateUserFoldersUI(userFoldersData), false, false);

  store.subscribe(async () => {
    if (window.location.pathname === '/personal') {
      const res = await getPersonalData();
      if (res) {
        const newFolderData = res.userFoldersData;
        paginationState.page = 1;
        paginationState.limit = 8;
        const sliced = paginate(
          paginationState.page,
          paginationState.limit,
          newFolderData
        ) as unknown as ResponseUserFolder[];
        paginationState.total = newFolderData.length;

        foldersCont.innerHTML = '';
        sliced.forEach((el) => {
          const folder: HTMLElement = renderUserFolder(el);
          foldersCont.append(folder);
        });

        const prevBtn = document.getElementById('prev') as HTMLElement;
        const nextBtn = document.getElementById('next') as HTMLElement;

        setPaginationBtns(prevBtn, nextBtn, paginationState.page, paginationState.limit, paginationState.total);
      }
    }
  });

  folders.append(foldersHeader, foldersCont, pagination);

  return folders;
};
