import { createInputComponent } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/createInputeComponent';
import { createButton } from 'src/components/ui/Button/Button';
import { createElem } from 'src/utils/create-element';
import { onSubmitCreateFolder } from '../../Handlers/onSubmitCreateFolder';

export const renderFolderActions = (): HTMLElement => {
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
  return foldersActions;
};
