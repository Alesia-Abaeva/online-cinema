/* eslint-disable no-underscore-dangle */
import { createUserFolder } from 'src/api/back/folders';

export const onSubmitCreateFolder = (e: Event): void => {
  e.preventDefault();

  const displayedNameImput = document.getElementById('create-user-folder') as HTMLInputElement;
  const displayedName = displayedNameImput.value;
  const id = Date.now();
  createUserFolder({ id, displayedName });
};
