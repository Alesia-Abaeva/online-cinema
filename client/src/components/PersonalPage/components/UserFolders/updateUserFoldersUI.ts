import { getPersonalData } from 'src/api/back/folders';
import { paginationState } from 'src/const/default-query-options';
import { paginate } from 'src/utils/paginate';
import { setPaginationBtns } from 'src/utils/set-paginaton-btns';
import { renderUserFolder } from '../UserFolder/UserFolder';

export const updateUserFoldersUI = async (data: ResponseUserFolder[] | undefined): Promise<void> => {
  const res = await getPersonalData();
  if (res) {
    const newFolderData = res.userFoldersData;
    if (data) {
      const foldersCont = document.querySelector('.personal__folders-cont') as HTMLElement;
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
};
