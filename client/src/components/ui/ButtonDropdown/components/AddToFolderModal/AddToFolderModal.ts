/* eslint-disable no-underscore-dangle */
import { createInputComponent } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/createInputeComponent';
import { createButton } from 'src/components/ui/Button/Button';
import { folderIcon, tick } from 'src/const/icons/icons';
import { store } from 'src/logic/redux';
import { createElem } from 'src/utils/create-element';
import { formatRuWord } from 'src/utils/formatRUWorld';
import styles from './AddToFolderModal.module.scss';
import { onSubmitCreateFolder } from './Handlers/onSubmitCreateFolder';

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
      const folder: HTMLElement = createElem('div', 'all-folders__folder');
      folder.dataset.id = el._id.toString();

      folder.dataset.checked = el.films.indexOf(filmId) !== -1 ? 'true' : 'false';

      folder.dataset.length = el.films.length.toString();

      const folderTitle: HTMLElement = createElem('p', 'all-folders__folder-title');
      folderTitle.innerHTML = `${folderIcon} ${el.displayedName}`;

      const amountOfFilms: HTMLElement = createElem('p', 'all-folders__folder-film-counter');

      amountOfFilms.innerHTML =
        folder.dataset.checked === 'true'
          ? `${tick}`
          : `${el.films.length} ${formatRuWord(el.films.length, ['фильм', 'фильма', 'фильмов'])}`;

      folder.append(folderTitle, amountOfFilms);
      allFoldersCont.append(folder);
    });
  }

  allFoldersCont.onclick = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('all-folders__folder')) {
      const amountOfFilms = target.querySelector('.all-folders__folder-film-counter') as HTMLElement;
      target.dataset.checked = target.dataset.checked === 'true' ? 'false' : 'true';
      const filmCount = target.dataset.length ? +target.dataset.length : 0;
      amountOfFilms.innerHTML =
        target.dataset.checked === 'true'
          ? `${tick}`
          : `${filmCount} ${formatRuWord(filmCount, ['фильм', 'фильма', 'фильмов'])}`;
    }
  };

  allFolders.append(allFoldersTitle, allFoldersCont);

  // right side - inputs to create folder or update
  const foldersActions: HTMLElement = createElem('div', 'folders-actions');

  const createFolderForm = createElem('form', 'folders-actions__create') as HTMLFormElement;
  const { container: folderName, input: createFolderNameInput } = createInputComponent({
    label: 'Новая папка',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });
  createFolderNameInput.setAttribute('maxLength', '31');
  createFolderNameInput.placeholder = 'Введите название папки';
  createFolderNameInput.id = 'create-user-folder';

  const createFolderBntCtn: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSaveData: HTMLElement = createButton('создать');
  bntSaveData.setAttribute('disabled', 'true');

  createFolderNameInput.oninput = () => {
    if (createFolderNameInput.value.length >= 2) {
      bntSaveData.removeAttribute('disabled');
    } else {
      bntSaveData.setAttribute('disabled', 'true');
    }
  };

  createFolderForm.onsubmit = onSubmitCreateFolder;

  createFolderBntCtn.append(bntSaveData);
  createFolderForm.append(folderName, createFolderBntCtn);

  foldersActions.append(createFolderForm);

  modalConetent.append(allFolders, foldersActions);
  modal.append(title, modalConetent);
  return modal;
};
