/* eslint-disable no-underscore-dangle */
import { handleCreateUserFolder } from 'src/components/PersonalAccount/components/ProfileInform/components/Handlers/handlersChangeUserData';

export const onSubmitCreateFolder = (e: Event): void => {
  e.preventDefault();

  const displayedNameImput = document.getElementById('create-user-folder') as HTMLInputElement;
  const displayedName = displayedNameImput.value;
  const id = Date.now();
  displayedNameImput.value = '';
  handleCreateUserFolder({ id, displayedName });
};
