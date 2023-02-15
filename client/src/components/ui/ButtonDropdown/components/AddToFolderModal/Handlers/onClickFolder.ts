/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { updateUserFolder } from 'src/api/back/folders';
import { tick } from 'src/const/icons/icons';
import { appDispatch } from 'src/logic/redux';
import { setUserInfo } from 'src/logic/redux/actions';
import { formatRuWord } from 'src/utils/formatRUWorld';

export const onClickFolder = async (folder: HTMLElement, filmId: number): Promise<void> => {
  const folderId = folder.dataset.id;
  if (folderId) {
    const amountOfFilms = folder.querySelector('.all-folders__folder-film-counter') as HTMLElement;

    folder.dataset.checked = folder.dataset.checked === 'true' ? 'false' : 'true';

    const updateRes = await updateUserFolder({ id: +folderId, filmId });

    const filmCount = updateRes.data.userFolders?.find((el) => el._id === +folderId)?.films.length;
    if (filmCount !== undefined) {
      amountOfFilms.innerHTML =
        folder.dataset.checked === 'true'
          ? `${tick}`
          : `${filmCount} ${formatRuWord(filmCount, ['фильм', 'фильма', 'фильмов'])}`;
      appDispatch(setUserInfo({ data: updateRes.data }));
    }
  }
};
