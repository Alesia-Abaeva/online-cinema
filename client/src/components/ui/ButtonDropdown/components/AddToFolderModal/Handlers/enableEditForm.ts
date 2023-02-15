import { renderOverlay } from 'src/components/Overlay/Overlay';
import { disableEditForm } from './disableEditForm';

export const enableEditForm = (displayedName: string, folderId: number): void => {
  const updateForm = document.getElementById('update-user-folder-form') as HTMLFormElement;
  const updateInput = document.getElementById('update-user-folder') as HTMLInputElement;
  const updateBntSaveData = document.getElementById('update-folder-btn') as HTMLElement;

  updateForm.classList.remove('disabled');
  updateBntSaveData.removeAttribute('disabled');
  updateInput.dataset.id = folderId.toString();
  updateInput.value = displayedName;
  updateInput.focus();

  const overlay = renderOverlay(disableEditForm, 'edit-folder-overlay');
  const modalContent = document.querySelector('.add-to-folder-modal__content') as HTMLElement;
  modalContent.append(overlay);
};
