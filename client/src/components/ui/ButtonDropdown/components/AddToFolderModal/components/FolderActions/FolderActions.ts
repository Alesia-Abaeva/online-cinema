import { createInputComponent } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/createInputeComponent';
import { createButton } from 'src/components/ui/Button/Button';
import { createElem } from 'src/utils/create-element';
import { onSubmitCreateFolder } from '../../Handlers/onSubmitCreateFolder';
import { onSubmitUpdateFolder } from '../../Handlers/onSubmitUpdateFolder';
import styles from './FolderActions.module.scss';

export const renderFolderActions = (): HTMLElement => {
  const foldersActions: HTMLElement = createElem('div', 'folders-actions');

  // Create folder
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
  createFolderNameInput.id = styles['create-user-folder'];

  const createFolderBntCtn: HTMLElement = createElem('div', 'profile__btn-save');
  const bntSaveData: HTMLElement = createButton('создать');
  bntSaveData.id = 'create-folder-btn';
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

  // Update folder name
  const updateFolderForm = createElem('form', 'folders-actions__update') as HTMLFormElement;
  updateFolderForm.classList.add('disabled');
  updateFolderForm.id = 'update-user-folder-form';

  const { container: updatefolderName, input: updateFolderNameInput } = createInputComponent({
    label: 'Редактировать',
    attribute: {
      type: 'text',
      style: 'profile__form-input',
    },
  });
  updateFolderNameInput.setAttribute('maxLength', '31');
  // createFolderNameInput.placeholder = 'Введите название папки';
  updateFolderNameInput.id = styles['update-user-folder'];

  const updateFolderBntCtn: HTMLElement = createElem('div', 'profile__btn-save');
  const updateBntSaveData: HTMLElement = createButton('сохранить');
  updateBntSaveData.id = 'update-folder-btn';
  updateBntSaveData.setAttribute('disabled', 'true');

  updateFolderNameInput.oninput = () => {
    if (updateFolderNameInput.value.length >= 2) {
      updateBntSaveData.removeAttribute('disabled');
    } else {
      updateBntSaveData.setAttribute('disabled', 'true');
    }
  };

  updateFolderForm.onsubmit = onSubmitUpdateFolder;

  updateFolderBntCtn.append(updateBntSaveData);
  updateFolderForm.append(updatefolderName, updateFolderBntCtn);

  foldersActions.append(createFolderForm, updateFolderForm);
  return foldersActions;
};
