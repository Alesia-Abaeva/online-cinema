/* eslint-disable no-underscore-dangle */
import { handleDeleteUserFolder } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { editIcon, folderIcon, tick, trashCan } from 'src/const/icons/icons';
import { createElem } from 'src/utils/create-element';
import { formatRuWord } from 'src/utils/formatRUWorld';
import { enableEditForm } from '../../Handlers/enableEditForm';
import styles from './Folder.module.scss';

export const renderFolder = (el: UserFolder, filmId: number | undefined): HTMLElement => {
  const folder: HTMLElement = createElem('div', styles['all-folders__folder']);
  folder.dataset.id = el._id.toString();
  if (filmId) {
    folder.dataset.checked = el.films.indexOf(filmId) !== -1 ? 'true' : 'false';
  }
  folder.dataset.length = el.films.length.toString();

  const folderTitle: HTMLElement = createElem('p', 'all-folders__folder-title');
  folderTitle.innerHTML = `${folderIcon} ${el.displayedName}`;

  const folderActions: HTMLElement = createElem('div', 'all-folders__folder-actions');

  const amountOfFilms: HTMLElement = createElem('p', 'all-folders__folder-film-counter');

  amountOfFilms.innerHTML =
    folder.dataset.checked === 'true'
      ? `${tick}`
      : `${el.films.length}&nbsp${formatRuWord(el.films.length, ['фильм', 'фильма', 'фильмов'])}`;

  const editCont: HTMLElement = createElem('div', 'all-folders__folder-edit');
  editCont.classList.add('icon-cont');
  editCont.innerHTML = `${editIcon}`;

  editCont.onclick = () => {
    enableEditForm(el.displayedName, el._id);
  };

  const deleteCont: HTMLElement = createElem('div', 'all-folders__folder-delete');
  deleteCont.classList.add('icon-cont');
  deleteCont.innerHTML = `${trashCan}`;

  deleteCont.onclick = () => {
    handleDeleteUserFolder({ id: el._id });
  };

  folderActions.append(amountOfFilms, editCont, deleteCont);
  folder.append(folderTitle, folderActions);

  return folder;
};
