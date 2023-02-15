import { removeOverlay } from 'src/utils/remove-overlay';

export const disableEditForm = (): void => {
  const updateForm = document.getElementById('update-user-folder-form') as HTMLFormElement;
  const updateInput = document.getElementById('update-user-folder') as HTMLInputElement;
  const updateBntSaveData = document.getElementById('update-folder-btn') as HTMLElement;

  updateForm.classList.add('disabled');
  updateBntSaveData.setAttribute('disabled', 'true');
  updateInput.value = '';
  updateInput.dataset.id = '';

  removeOverlay('edit-folder-overlay');
};
