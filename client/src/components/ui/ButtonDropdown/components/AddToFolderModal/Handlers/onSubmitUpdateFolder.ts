import { handleUpdateUserFolderName } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';
import { disableEditForm } from './disableEditForm';

export const onSubmitUpdateFolder = (e: Event): void => {
  e.preventDefault();

  const updateInput = document.getElementById('update-user-folder') as HTMLInputElement;
  const displayedName = updateInput.value;
  const id = updateInput.dataset.id ? +updateInput.dataset.id : '';

  disableEditForm();
  if (id) handleUpdateUserFolderName({ id, displayedName });
};
